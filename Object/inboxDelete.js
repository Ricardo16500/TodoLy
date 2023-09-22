class InboxDelete{
    deleteInbox(){
        cy.get("#MainContentTasks #ItemListPlaceHolder #mainItemList #ItemCheckDiv").last().click();
    }
}
export default new InboxDelete;
    