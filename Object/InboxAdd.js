
class inboxAdd{
    openInbox(){
        cy.get("#FilterListPlaceHolder #ItemId_0 .ProjItemTable " ).each(($button)=>{
            cy.wrap($button).click();
        })
        
    
        
    }
    addNewNote(newNote){
        cy.get("#NewItemContentInput").type(newNote);
    }
    addBtn(){
        cy.get("#NewItemAddButton").click();
    }
}
export default new inboxAdd;