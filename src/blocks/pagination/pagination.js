// import ready from "../../js/utils/documentReady.js";

// ready(function () {
//   const pagination = document.querySelector(".js-pagination");

//   if (pagination) {
//     const prevButton = pagination.querySelector(".pagination__prev");
//     const nextButton = pagination.querySelector(".pagination__next");
//     const pagesContainer = pagination.querySelector(".pagination__pages");
//     const numPages = 21;
//     let currentPage = 1;

//     // Create page buttons
//     // function createPageButtons() {
//     //   const fragment = document.createDocumentFragment();
//     //   let startPage = 1;
//     //   let endPage = Math.min(numPages, 5 + currentPage - 1);
//     //   if (numPages > 5 && currentPage > 3) {
//     //     startPage = currentPage - 2;
//     //     endPage = currentPage + 2;
//     //     if (endPage > numPages) {
//     //       startPage = startPage - (endPage - numPages);
//     //       endPage = numPages;
//     //     }
//     //   }
//     //   for (let i = startPage; i <= endPage; i++) {
//     //     const pageButton = document.createElement("button");
//     //     pageButton.classList.add("pagination__page");
//     //     pageButton.textContent = i;
//     //     if (i === 1) {
//     //       pageButton.classList.add("active");
//     //       currentPage = 1;
//     //     } else if (i === currentPage) {
//     //       pageButton.classList.add("active");
//     //     }
//     //     fragment.appendChild(pageButton);
//     //   }
//     //   if (numPages > 5 && currentPage < numPages - 2) {
//     //     fragment.appendChild(document.createElement("button")); // dots
//     //   }
//     //   return fragment;
//     // }

//     // Add page buttons
//     pagesContainer.appendChild(createPageButtons());

//     // Add click event listener to the prev button
//     prevButton.addEventListener("click", () => {
//       if (currentPage > 1) {
//         currentPage--;
//         pagesContainer.children[0].remove();
//         pagesContainer.insertBefore(createPageButtons(), pagesContainer.children[0]);
//       }
//     });

//     // Add click event listener to the next button
//     nextButton.addEventListener("click", () => {
//       if (currentPage < numPages) {
//         currentPage++;
//         pagesContainer.children[pagesContainer.children.length - 1].remove();
//         pagesContainer.appendChild(createPageButtons());
//       }
//     });

//     // Add click event listener to the page buttons
//     pagesContainer.addEventListener("click", (event) => {
//       if (event.target.classList.contains("pagination__page")) {
//         const pageNumber = parseInt(event.target.textContent);
//         if (pageNumber !== currentPage) {
//           pagesContainer.children[currentPage - 1].classList.remove("active");
//           currentPage = pageNumber;
//           pagesContainer.children[currentPage - 1].classList.add("active");
//         }
//       }
//     });
//   }
// });
