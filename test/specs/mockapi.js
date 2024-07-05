describe('Login Page', () => {
    it('should mock the login API call and show a success message', async () => {
        await browser.url('https://www.startech.com.bd/account/login');
        
       

        // Perform the login action with fake credentials
        const mobileInput = await $("//input[@id='input-username']");
        const passwordInput = await $("//input[@id='input-password']");
        const loginButton = await $("//button[normalize-space()='Login']");

        await mobileInput.setValue('fake_mobile');
        await passwordInput.setValue('fake_password');
        
        await browser.mock('POST', 'https://www.startech.com.bd/account/login', 200, {
            message: 'You logged in successfully'
        });

        await loginButton.click();
        
        // Verify the custom success message
        const successMessage = await $('body').getText();
        expect(successMessage).to.include('You logged in successfully');
    });
});