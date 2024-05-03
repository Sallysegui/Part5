describe('blog website 5.17',  function() {


  it(' displays the login form', function() {
    cy.visit('http://localhost:5173')
    cy.contains('username')
    cy.contains('password')
    cy.contains('log in')
  })
})



// describe('Login 5.18',function() {
//   beforeEach(function() {
//     cy.request('POST', 'http://localhost:3003/api/testing/reset')
//       const user = {
//         name: 'Sally',
//         password: '1234'
//       }
//       cy.request('POST', 'http://localhost:3003/api/users/', user) 
//           const user2 = {
//             name: 'Rhian',
//             password: '1234'
//       }
//     cy.request('POST', 'http://localhost:3003/api/users/', user2) 
//     cy.visit('http://localhost:5173')
//   })
//   it('succeeds with correct credentials', function() {
//     cy.get('#username').type('Sally')
//     cy.get('#password').type('1234')
//     cy.get('#login-button').click()
//     cy.contains('Sally logged in')
//   })
//   it('fails with wrong credentials', function() {
//     cy.get('#username').type('Sally')
//     cy.get('#password').type('234')
//     cy.get('#login-button').click()
//     cy.get('.error').contains('Wrong credentials')
//     cy.get('html').should('not.contain', 'Sally logged in')
//   })


// })





// describe('Blog app 5.19 and 5.20', function() {
  
//   beforeEach(function() {
//     cy.request('POST', 'http://localhost:3003/api/testing/reset')
//     const user = {
//       name: 'Sally',
//       password: '1234'
//     }
//     cy.request('POST', 'http://localhost:3003/api/users/', user) 
//    cy.visit('http://localhost:5173')
//     cy.get('#username').type('Sally')
//     cy.get('#password').type('1234')
//     cy.get('#login-button').click()
//   })
  



//   it('a new blog can be created', function() {
//     cy.contains('Create New Blog').click()
//     cy.get('#title').type('a blog created by cypress')
//     cy.get('#author').type('author by cypress')
//     cy.get('#url').type('url by cypress.com')
//     cy.contains('create').click()
//     cy.contains('a blog created by cypress')
//   })



//   it('User can like a blog', function() {
//     cy.contains('Create New Blog').click()
//     cy.get('#title').type('a blog created by cypress')
//     cy.get('#author').type('author by cypress')
//     cy.get('#url').type('url by cypress.com')
//     cy.contains('create').click()
//     cy.contains('show more').click()
//     cy.contains('like').click()
//     cy.get('#likesshow')
//     .contains('1')

//   })
// })



//  describe('Blog app 5.21', function() {
    
//     beforeEach(function() {
//       cy.request('POST', 'http://localhost:3003/api/testing/reset')
//       const user = {
//         name: 'Sally',
//         password: '1234'
//       }
//       cy.request('POST', 'http://localhost:3003/api/users/', user) 

//       const user2 = {
//         name: 'Mary',
//         password: '1234'
//       }
//       cy.request('POST', 'http://localhost:3003/api/users/', user2) 


//       cy.request('POST', 'http://localhost:3003/api/login', {
//         username: 'Sally', password: '1234'
//       }).then(response => {
//         localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))

//       })
//       cy.visit('http://localhost:5173')

//       cy.contains('Create New Blog').click()
//       cy.get('#title').type('a blog created by cypress')
//       cy.get('#author').type('author by cypress')
//       cy.get('#url').type('url by cypress.com')
//       cy.contains('create').click()
//       cy.contains('a blog created by cypress')

//     })

  
//     it('user who created a blog can delete it', function() {
//       cy.contains('show more').click()
//       cy.contains('remove').click()
//       cy.contains('a blog created by cypress by author by cypress it has been removed')
//       cy.get('html').should('not.contain', 'a blog created by cypress author by cypress')

//     })
//   })




//  describe('Blog app 5.22', function() {
    
//     beforeEach(function() {
//       cy.request('POST', 'http://localhost:3003/api/testing/reset')
//       const user = {
//         name: 'Sally',
//         password: '1234'
//       }
//       cy.request('POST', 'http://localhost:3003/api/users/', user) 

//       const user2 = {
//         name: 'Mary',
//         password: '1234'
//       }
//       cy.request('POST', 'http://localhost:3003/api/users/', user2) 


//       cy.request('POST', 'http://localhost:3003/api/login', {
//         username: 'Sally', password: '1234'
//       }).then(response => {
//         localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))

//       })
//       cy.visit('http://localhost:5173')

//       cy.contains('Create New Blog').click()
//       cy.get('#title').type('a blog created by cypress')
//       cy.get('#author').type('author by cypress')
//       cy.get('#url').type('url by cypress.com')
//       cy.contains('create').click()
//       cy.contains('a blog created by cypress')

//     })


//     it('user who did not created a blog can not see the remove button', function() {


//       cy.contains('Log Out').click()

      
//       cy.request('POST', 'http://localhost:3003/api/login', {
//         username: 'Mary', password: '1234'
//       }).then(response => {
//         localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
//       })
//       cy.visit('http://localhost:5173')

//       cy.contains('show more').click()
//        cy.get('button').contains('remove').should('not.exist')
// //      cy.contains('remove').should('not.exist')


//     })
//   })



describe('Blog app 5.23', function() {
    
      beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
          name: 'Sally',
          password: '1234'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user) 
  
  
        cy.request('POST', 'http://localhost:3003/api/login', {
          username: 'Sally', password: '1234'
        }).then(response => {
          localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
  
        })
        cy.visit('http://localhost:5173')
       
      })
      
    describe('Decreasing order of likes',function() {
 

      it('A blog can be created', function() {

        cy.contains('Create New Blog').click()
        cy.get('#title').type('The title with the most likes')
        cy.get('#author').type('author by cypress')
        cy.get('#url').type('url by cypress.com')
        cy.contains('create').click()
        cy.contains('show more').click()
        cy.get('button').contains('like').click()
        cy.wait(1000)
        // cy.get('button').contains('like').click()

        // cy.visit('http://localhost:5173')

        cy.contains('Create New Blog').click()
        cy.get('#title').type('The title with the second most likes')
        cy.get('#author').type('fefe')
        cy.get('#url').type('url esfaffe.com')
        cy.contains('create').click()
        // cy.visit('http://localhost:5173')
        //cy.get('.blogcontainer').eq(1).should('be.visible')
        // cy.wait(7000)
        // cy.contains('show more').click()
        // cy.get('button').contains('like').click()
        cy.contains('The title with the second most likes fefe')
        cy.get('button').contains('show more').click({force: true})
        

        // cy.wait(1000)

        cy.get('.blogcontainer').eq(0).should('contain', 'The title with the most likes')
        cy.get('li').eq(1).should('contain', 'The title with the second most likes fefe')
  
      })
  
    })
})
