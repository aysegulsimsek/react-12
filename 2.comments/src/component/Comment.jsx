import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Action from './Action';



function Comment({ comment, handleInsertNode, handleEditNode, handleDeleteNode }) {
    const [input, setInput] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [expand, setExpand] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current && editMode) {
            inputRef.current.focus();
        }
    }, [editMode]);
    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef.current.innerText);
        } else {
            setExpand(true)
            handleInsertNode(comment.id, input)
            setShowInput(false)
            setInput("")
        }
        if (editMode) setEditMode(false)
    }
    const handleDelete = () => {
        handleDeleteNode(comment.id);
    }
    const handleNewComment = () => {
        setExpand(!expand)
        setShowInput(true)
    }
    return (
        <div style={{ padding: '10px 5px', backgroundColor: '#efececdf', width: '100%', borderTop: '1px solid lightgray' }}>
            <div className={comment.id === 1 ? "inputContainer" : "commentcontainer"}>
                {comment.id === 1 ? (
                    <>
                        <input type="text" className='input__container__input first_input'
                            autoFocus value={input} onChange={(e) =>
                                setInput(e.target.value)} placeholder='type...'
                        />
                        <Action className="reply comment" type="COMMENT" handleClick={onAddComment} />
                    </>

                ) : (
                    <>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                            ref={inputRef}
                            style={{ wordWrap: "break-word" }}>
                            {comment.name}
                        </span>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            {editMode ? (
                                <>
                                    <Action className="reply" type="SAVE" handleClick={onAddComment} />
                                    <Action
                                        className="reply"
                                        type="CANCEL"
                                        handleClick={() => {
                                            if (inputRef.current) {
                                                inputRef.current.innerText = comment.name;
                                            }
                                            setEditMode(false);
                                            setShowInput(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Action className="reply" type={
                                        <>
                                            {expand ? (
                                                <IoIosArrowUp width="10px" height="10px" />
                                            ) : (
                                                <IoIosArrowDown width="10px" height="10px" />
                                            )}{""}
                                            REPLY
                                        </>
                                    }

                                        handleClick={handleNewComment} />
                                    <Action className="reply" type="EDİT"
                                        handleClick={() => {
                                            setEditMode(true)
                                        }} />
                                    <Action className="reply" type="DELETE" handleClick={handleDelete} />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>

                {showInput && (
                    <div className='inputContainer'>
                        <input type="text" className='input__container__input' autoFocus onChange={(e) => setInput(e.target.value)} />
                        <Action className="reply" type="REPLY" handleClick={onAddComment} />
                        <Action className="reply" type="CANCEL"
                            handleClick={() => {
                                setShowInput(false);
                                if (!comment?.items?.length) setExpand(false)
                            }} />

                    </div>
                )}
                {comment?.items?.map((cmnt) => {
                    return <Comment key={cmnt.id}
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                        comment={cmnt} />
                })}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Comment