const alert = document.getElementById("alert-danger");
socket.emit("getOnlineFriends", myId);
socket.on("onlineFriends", (onlineFriends) => {
  let div = document.getElementById("online-friends");
  if (onlineFriends.length === 0) {
    alert.classList.remove("d-none");
  } else {
    let html = `<div class="row">`;
    for (let friend of onlineFriends) {
      html += `<div class="col-8 col-sm-6 col-md-3 col-lg-3 m-auto">
      <div class="card-flyer" style="margin-top: 2%";
          onclick="location.href = '/profile/${friend.id}'" title="Online friend">
          <div class="text-box">
              <div class="image-box">
                  <img src="/imgs/avatar.png" alt="" />
              </div>
              <div class="text-container" style = "padding: 20px 18px;">
                  <h5>${friend.name}</h5>
                  <div class="card-footer">
                      <a href="/chat/${friend.chatId}"
                          class="btn btn-primary ">Chat</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    `;
    }
    html += `</div>`;
    div.innerHTML = html;
  }
});
