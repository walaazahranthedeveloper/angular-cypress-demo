describe('Todo List App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the initial todos', () => {
      cy.get('ul li').should('have.length', 2);
      cy.get('ul li').first().should('contain.text', 'Learn Angular');
    });
  
    it('should add a new todo', () => {
      cy.get('input').type('Write Cypress Tests');
      cy.contains('Add Todo').click();
      cy.get('ul li').should('have.length', 3);
      cy.get('ul li').last().should('contain.text', 'Write Cypress Tests');
    });
  
    it('should complete a todo', () => {
      cy.contains('Complete').first().click();
      cy.get('ul li').first().should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
    });
  
    it('should remove a todo', () => {
      cy.contains('Remove').first().click();
      cy.get('ul li').should('have.length', 1);
    });
  });
  