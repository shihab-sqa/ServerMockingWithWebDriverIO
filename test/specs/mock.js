describe("Mock test",()=>{


it("Check Mock Response",async()=>{

await browser.url("https://www.startech.com.bd/account/login");


const mock= await browser.mock("https://www.startech.com.bd/account/login",{method:"POST"});

const htmlResponse = `
<html>
    <body>
        <h1>Log In Page</h1>
        <p>You logged in successfully </p>
    </body>
</html>`
;


mock.respond(htmlResponse, {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' }
});





const mobileInput = await $("//input[@id='input-username']");
        const passwordInput = await $("//input[@id='input-password']");
        const loginButton = await $("//button[normalize-space()='Login']");

        await mobileInput.setValue('fake_mobile');
        await passwordInput.setValue('fake_password');
        await browser.pause(2000);
        await loginButton.click();
        await browser.pause(5000);








});




});

