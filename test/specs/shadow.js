describe("Shadow Dom Practice",()=>{

it("Find Shadow element",async()=>{

 await browser.navigateTo("https://selectorshub.com/iframe-in-shadow-dom/");
   
 await browser.pause(10000);

 (await (await $ ("#userName")).shadow$("#kils")).setValue("Shihab")

 await browser.pause(10000);

//(await (await $("#app2")).shadow$("#pizza")).setValue("Pizza");

//await browser.pause(1000);

})




})