describe("mock my check",()=>{
it('should mock a request and send us joke', async () => {
    await browser.url('https://play1.automationcamp.ir/register.html');

    const mock = await browser.mock('https://play1.automationcamp.ir/confirmation.html', {
        method: 'get'
    });


    const htmlResponse = `
        <html>
            <body>
                <h1>Mocked HTML Content</h1>
                <p>This is a mocked HTML response.</p>
            </body>
        </html>
    `;

    mock.respond(htmlResponse, {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' }
    });
    const firatName = await $('input[name="first_name"]');
        const lastname = await $('input[name="last_name"]');
        const email = await $('input[name="email"]');
        const password = await $('input[name="password"]');
        const confirmPassword = await $('input[name="confirm_password"]');
        const checkBox = await $('input[name="terms"]');
        const registerBtn = await $('#submit_button')


        await firatName.setValue("Noman")
        await lastname.setValue("Ibrahim")
        await email.setValue("Ibrahim@mail.com")
        await password.setValue("123456")
        await confirmPassword.setValue("123456")
        await checkBox.click()
        await registerBtn.click()


        await browser.pause(10000)

});

});