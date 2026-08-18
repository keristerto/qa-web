import common_page from '../support/pages/common_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import {faker} from '@faker-js/faker'
describe('Cadastro de Usuario',()=>{

beforeEach('Acessar cadastro de usuario',()=> {
  common_page.acessarCadastroUsuario()

})

    
     it('Campo nome vazio',()=>{
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

      it('Campo e-mail vazio',()=>{
        cadastro_usuario_page.preencheNome(faker.person.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')  
        
    })
      it('Campo e-mail inválido',()=>{
      cadastro_usuario_page.preencheNome(faker.person.firstName())
      cadastro_usuario_page.preencheEmail('emailinvalido')
      cadastro_usuario_page.clicarCadastrar()
      cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
      it('Campo senha vazio',()=>{
        cadastro_usuario_page.preencheNome(faker.person.firstName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
      })

      it('Campo senha inválido',()=>{
        cadastro_usuario_page.preencheNome(faker.person.firstName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
      })

    it.only('Cadastro com sucesso',async()=>{
      const name= await faker.person.firstName()

      cadastro_usuario_page.preencheNome(name)
      cadastro_usuario_page.preencheEmail(faker.internet.email())
      cadastro_usuario_page.preencheSenha('123456')
      cadastro_usuario_page.clicarCadastrar() 
      cadastro_usuario_page.validarMensagemSucesso(name)
   
})        

})