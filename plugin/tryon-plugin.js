(function () {
  function createButton() {
    const btn = document.createElement("button");
    btn.innerText = "👕 Try It On";

    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999999;
      padding: 12px 18px;
      background: #000;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

    btn.onclick = openModal;
    return btn;
  }

  function openModal() {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    modal.innerHTML = `
      <div style="background:#fff;padding:20px;border-radius:12px;width:360px">
        <h3>Virtual Try-On</h3>

        <select id="cat">
          <option value="upper_body">Upper Body</option>
          <option value="lower_body">Lower Body</option>
          <option value="full_body">Full Body</option>
          <option value="accessory">Accessory</option>
          <option value="footwear">Footwear</option>
          <option value="cosmetics">Cosmetics</option>
        </select>

        <input type="file" id="photo" />

        <button id="go">Generate</button>

        <div id="out" style="margin-top:10px"></div>

        <button id="close">Close</button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("close").onclick = () => modal.remove();

    document.getElementById("go").onclick = async () => {
      const file = document.getElementById("photo").files[0];
      if (!file) return alert("Upload a photo");

      const form = new FormData();
      form.append("user_image", file);
      form.append("category", document.getElementById("cat").value);
      form.append("product_image", document.querySelector("img")?.src || "");

      const res = await fetch("http://localhost:3000/tryon", {
        method: "POST",
        body: form
      });

      const data = await res.json();

      document.getElementById("out").innerHTML =
        `<img src="data:image/png;base64,${data.image}" style="width:100%"/>`;
    };
  }

  function init() {
    const btn = createButton();
    document.body.appendChild(btn);
    console.log("✅ Try-On button injected");
  }

  window.addEventListener("load", init);
})();
