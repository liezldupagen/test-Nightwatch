module.exports = {
	'example': async () => {
		browser.window.setSize(1366, 768);
		browser.navigateTo('https://mail.google.com');
		browser.element.findByLabelText('Email or phone').setValue('AutomationTest.1123');
		browser.element.find('#identifierNext').findByRole('button').click();
		browser.element.findByLabelText('Enter your password').setValue('AutomationTest@1');
		browser.element.find('#passwordNext').findByRole('button').click();
		browser.element.find("[role='grid'] tbody :nth-child(1) [role='gridcell'] [role='link']")
		browser.expect(By.xpath("//*[@role='grid']//*[@role='row']//*[@role='gridcell']//*[@role='link' and descendant::*[contains(normalize-space(),'Automation, finish setting up your new Google Account')]]")).to.be.visible;
	}
};