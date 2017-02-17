/**
 * Created by User3 on 25.01.2017.
 */
$("#open-contact-information").click(function () {
    $("#open-contact-information").addClass( "form-nav-item-active" );
    $("#open-phone-number").removeClass( "form-nav-item-active" );
    $("#open-settings").removeClass( "form-nav-item-active" );
    $("#open-e-mail-settings").removeClass( "form-nav-item-active" );
    $("#open-socials").removeClass( "form-nav-item-active" );
    $("#open-your-goal").removeClass( "form-nav-item-active" );
    $("#contact-information").css("display", "block");
    $("#phone-number").css("display", "none");
    $("#settings").css("display", "none");
    $("#e-mail-address").css("display", "none");
    $("#e-mail-settings").css("display", "none");
    $("#change-password").css("display", "none");
    $("#socials").css("display", "none");
    $("#your-goal").css("display", "none");
});
$("#open-phone-number").click(function () {
    $("#open-contact-information").removeClass( "form-nav-item-active" );
    $("#open-phone-number").addClass( "form-nav-item-active" );
    $("#open-settings").removeClass( "form-nav-item-active" );
    $("#open-e-mail-settings").removeClass( "form-nav-item-active" );
    $("#open-socials").removeClass( "form-nav-item-active" );
    $("#open-your-goal").removeClass( "form-nav-item-active" );
    $("#contact-information").css("display", "none");
    $("#phone-number").css("display", "block");
    $("#settings").css("display", "none");
    $("#e-mail-address").css("display", "none");
    $("#e-mail-settings").css("display", "none");
    $("#change-password").css("display", "none");
    $("#socials").css("display", "none");
    $("#your-goal").css("display", "none");
});
$("#open-settings").click(function () {
    $("#open-contact-information").removeClass( "form-nav-item-active" );
    $("#open-phone-number").removeClass( "form-nav-item-active" );
    $("#open-settings").addClass( "form-nav-item-active" );
    $("#open-e-mail-settings").removeClass( "form-nav-item-active" );
    $("#open-socials").removeClass( "form-nav-item-active" );
    $("#open-your-goal").removeClass( "form-nav-item-active" );
    $("#contact-information").css("display", "none");
    $("#phone-number").css("display", "none");
    $("#settings").css("display", "block");
    $("#e-mail-address").css("display", "block");
    $("#e-mail-settings").css("display", "block");
    $("#change-password").css("display", "block");
    $("#socials").css("display", "none");
    $("#your-goal").css("display", "none");
});
$("#open-socials").click(function () {
    $("#open-contact-information").removeClass( "form-nav-item-active" );
    $("#open-phone-number").removeClass( "form-nav-item-active" );
    $("#open-settings").removeClass( "form-nav-item-active" );
    $("#open-e-mail-settings").removeClass( "form-nav-item-active" );
    $("#open-socials").addClass( "form-nav-item-active" );
    $("#open-your-goal").removeClass( "form-nav-item-active" );
    $("#contact-information").css("display", "none");
    $("#phone-number").css("display", "none");
    $("#settings").css("display", "none");
    $("#e-mail-address").css("display", "none");
    $("#e-mail-settings").css("display", "none");
    $("#change-password").css("display", "none");
    $("#socials").css("display", "block");
    $("#your-goal").css("display", "none");
});
$("#open-your-goal").click(function () {
    $("#open-contact-information").removeClass( "form-nav-item-active" );
    $("#open-phone-number").removeClass( "form-nav-item-active" );
    $("#open-settings").removeClass( "form-nav-item-active" );
    $("#open-e-mail-settings").removeClass( "form-nav-item-active" );
    $("#open-socials").removeClass( "form-nav-item-active" );
    $("#open-your-goal").addClass( "form-nav-item-active" );
    $("#contact-information").css("display", "none");
    $("#phone-number").css("display", "none");
    $("#settings").css("display", "none");
    $("#e-mail-address").css("display", "none");
    $("#e-mail-settings").css("display", "none");
    $("#change-password").css("display", "none");
    $("#socials").css("display", "none");
    $("#your-goal").css("display", "block");
});

// withdraw-FAQ страница............................................................................................../
$(function () {
    $("#withdraw-accordion").accordion({
        collapsible: true
    });
});

// goals............................................................................................................../
// $(".goal-item").click(function() {
//     alert(this.id);
    // $(".goal-item").removeClass("goal-item-big");
    // $(this).addClass("goal-item-big");
// });