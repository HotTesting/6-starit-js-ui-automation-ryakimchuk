import { expect } from 'chai';

describe('WDIO', function () {
    beforeEach(function () {
        browser.url('/');
        $('.customer-service').click();
        browser.pause(500);
    });

    it('Should be alive', function () {
        const contactForm = {
            name: $('[name="name"]'),
            email: $('form[name="contact_form"] [name="email"]'),
            subject: $('[name="subject"]'),
            message: $('[name="message"]'),
            sendBtn: $('[name="send"]')
        };
        contactForm.name.setValue('Roman');
        contactForm.email.setValue('yakimchuk.r.v@gmail.com');
        contactForm.subject.setValue('Problem with product curt');
        contactForm.message.setValue('When I add product to the curt and open it I can`t see a product');
        contactForm.sendBtn.click();
        browser.pause(1000);
        const toaster = $('#notices').getText();
        expect(toaster).to.include('Your email has successfully been sent');
    })
});