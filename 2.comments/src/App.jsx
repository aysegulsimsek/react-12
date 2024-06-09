import Comment from './component/Comment'
import './App.css'
import './main'
import Header from './component/Header';
import useNode from './hooks/useNode';
import { useState } from 'react';


function App() {

  const comments = {
    id: 1,
    items: []
  };
  const [commentsData, setCommentsData] = useState(comments)
  const { insertNode, editNode, deleteNode } = useNode();
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item)
    setCommentsData(finalStructure)
  }
  const handleEditNode = (folderId, item) => {
    const finalStructure = editNode(commentsData, folderId, item)
    setCommentsData(finalStructure)
  }
  const handleDeleteNode = (folderId, item) => {
    const finalStructure = deleteNode(commentsData, folderId, item)
    const temp = { ...finalStructure };
    setCommentsData(temp)
  }
  return (
    <div className='App'>
      <Header />
      <Comment handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode} comment={commentsData} />
    </div>
  )
}

export default App
