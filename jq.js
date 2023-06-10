$(document).ready(function () {
  $(".login-form").slideDown("slow", () => {
    $(".name").animate(
      {
        left: "0%",
      },
      "slow"
    );
    $(".password").animate(
      {
        right: "0%",
      },
      "slow",
      function () {
        $(".btn").animate(
          {
            opacity: "1",
          },
          function () {
            $("#createacc").animate(
              {
                bottom: "0px",
              },
              "slow"
            );
          }
        );
      }
    );
  });
});
