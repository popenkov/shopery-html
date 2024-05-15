import ready from "../../js/utils/documentReady.js";
import JustValidate from "just-validate";
ready(function () {
  const commentForm = document.querySelector(".js-comment-form");

  if (!commentForm) {
    return;
  }

  const validate = new JustValidate(commentForm, {
    lockForm: true,
  });

  validate
    .addField("#commentFullName", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#commentMessage", [
      {
        rule: "required",
      },
    ])

    .addField("#commentEmail", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ]);
});
