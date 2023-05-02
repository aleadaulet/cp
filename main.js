const showMorePhotosButton = document.querySelector(".show-more-photos-button");

showMorePhotosButton.addEventListener("click", () => {
  const allHiddenImages = document.querySelectorAll(".image-hidden");

  for (const image of allHiddenImages) {
    image.classList.remove("image-hidden");
  }

  showMorePhotosButton.remove();
});

const allLikeButtons = document.querySelectorAll(".like-button");

for (const likeButton of allLikeButtons) {
  likeButton.addEventListener("click", () => {
    const innerImage = likeButton.querySelector("img");

    const isActive = innerImage.dataset.active === "true" ? true : false;

    if (isActive) {
      innerImage.src = "../images/heart-nonactive.jpg";
    } else {
      innerImage.src = "../images/heart-active.jpg";
    }

    innerImage.dataset.active = !isActive;
  });
}
