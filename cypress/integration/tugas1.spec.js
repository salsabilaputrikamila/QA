/// <reference types="cypress" />

describe('User menuju ke halaman login dengan memasukkan url siakad', () => {
    it('Cek halaman berhasil diakses tidak', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Tes User masuk dengan Username yang valid dan Password tidak valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710184')
        cy.get('#password').type('salsa')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
    });

    it('Tes User tidak dapat login dengan username yang valid dan sandi yang tidak valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('salsa')
        cy.get('#password').type('salsa')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
    });

    it('Tes User masuk dengan Username valid dan Password valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710184')
        cy.get('#password').type('salsabila')
        cy.get('#form_login > div.form-actions > button').click()
    });

    it('Tes User klik checkbox untuk menampilkan password yang diinputkan', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('salsa')
        cy.get('#password').type('salsabila')
        cy.get('[type="checkbox"]').click()
    });

    // it('Tes User klik lupa Password', () => {
    //     cy.visit("http://siakad.polinema.ac.id/","")
    //     cy.contains('Lupa Password?')
    //     cy.get('#forget-password').click()
    // });
    
    it('Tes User masuk dengan mengkosongkan Username dan Password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')
    });

    it('Tes User masuk dengan mengkosongkan Username namun Password diisi', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').clear()
        cy.get('#password').type('salsa')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')

    });

    it('Tes User masuk dengan mengisikan Username namun Password dikosongkan', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710184')
        cy.get('#password').clear()
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi')
    });
    
});
