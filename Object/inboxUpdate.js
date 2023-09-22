class inboxUpdate{
    openUpdateText(){
        //#MainContentTasks #ItemListPlaceHolder #mainItemList #ItemId_11188827 .ProjItemTable .ItemContent
        cy.get("#MainContentTasks #ItemListPlaceHolder #mainItemList ").last().click();
        
    }
    updateText(newText){
        
       
        cy.get("#MainContentTasks #ItemListPlaceHolder #mainItemList .ProjItemTable .ItemContent").last().type(newText).type('{enter}');
    }
    
}
export default new inboxUpdate;