"use strict";
(() => {
  const page = "https://qijiangyuan.github.io/privacy-policy/Winterclan/data-deletion.html";
  const endpoint = "https://winterclan-api.whjcxgame.cn/account/deletion/status";
  const input = document.getElementById("status-link");
  const result = document.getElementById("request-result");
  const check = document.getElementById("check-status");
  const copy = document.getElementById("copy-status");
  function parse(value) {
    const url = new URL(value);
    if (url.origin + url.pathname !== page || url.search) throw new Error("link");
    const fields = new URLSearchParams(url.hash.slice(1));
    const id = fields.get("request"), receipt = fields.get("receipt");
    if (!/^[0-9a-f]{32}$/.test(id || "") || !/^[0-9a-f]{64}$/.test(receipt || "")) throw new Error("link");
    return { deletion_id: id, receipt };
  }
  function date(value) {
    const parsed = new Date(value);
    return value && !Number.isNaN(parsed.getTime()) ? parsed.toLocaleString() : "—";
  }
  async function load() {
    let body;
    try { body = parse(input.value.trim()); }
    catch { result.textContent = "Paste the complete private link from the game. / 请粘贴游戏提供的完整私密链接。"; return; }
    check.disabled = true;
    result.textContent = "Checking… / 查询中……";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, { method: "POST", credentials: "omit", cache: "no-store",
        referrerPolicy: "no-referrer", redirect: "error", signal: controller.signal,
        headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json();
      if (!response.ok || data.code !== 0) throw new Error("unavailable");
      if (data.status !== "pending" && data.status !== "completed") throw new Error("state");
      const label = data.status === "completed" ? "Completed / 已完成" : "Pending manual processing / 待人工处理";
      result.textContent = label + "\nRequest / 申请编号: " + data.deletion_id +
        "\nSubmitted / 提交时间: " + date(data.submitted_at) + "\nDue by / 处理期限: " + date(data.due_at) +
        (data.status === "completed" ? "\nCompleted / 完成时间: " + date(data.completed_at) :
          "\nThe account has not yet been deleted. / 账号尚未删除。") +
        (data.apple_revocation === "manual_required" ? "\nSee the Sign in with Apple instructions below. / 请查看下方 Apple 撤销授权说明。" : "");
    } catch {
      result.textContent = "Could not retrieve status. Keep your link and retry. A completed receipt expires after 180 days. If you need help, contact qijiangyuan@gmail.com with the request number only.\n暂时无法查询，请保存链接后重试。完成回执在完成后 180 天到期；需要帮助时可联系 qijiangyuan@gmail.com，仅提供申请编号。";
    } finally { clearTimeout(timeout); check.disabled = false; }
  }
  check.addEventListener("click", load);
  copy.addEventListener("click", async () => {
    try {
      parse(input.value.trim());
      await navigator.clipboard.writeText(input.value.trim());
      result.textContent = "Private link copied. Keep it private. / 已复制，请妥善保管，不要公开。";
    } catch {
      input.focus(); input.select();
      result.textContent = "Select and copy the complete link above. / 请选中并复制上方完整链接。";
    }
  });
  if (location.hash) {
    const privateLink = page + location.hash;
    // Fragments never reach the server; remove from browser history before use.
    history.replaceState(null, "", location.pathname);
    try { parse(privateLink); input.value = privateLink; load(); }
    catch { result.textContent = "Invalid private link. / 私密链接格式不正确。"; }
  }
})();
