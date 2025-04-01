import { Editor } from "@tiptap/react";
import { useCallback } from "react";
import {
  FaBold,
  FaItalic,
  FaLink,
  FaList,
  FaListOl,
  FaUnderline,
  FaUnlink,
} from "react-icons/fa";

const EditorMenuBar = ({
  editor,
  className,
}: {
  editor: Editor | null;
  className?: string;
}) => {
  if (!editor) {
    return null;
  }

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e: any) {
      alert(e.message);
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={`py-2 ${className}`}>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("bold") && "bg-blue-50"
          }`}
        >
          <FaBold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("italic") && "bg-blue-50"
          }`}
        >
          <FaItalic size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("underline") && "bg-blue-50"
          }`}
        >
          <FaUnderline size={18} />
        </button>
        <span className="h-[29px] w-[1px] bg-gray-100"></span>
        <button
          type="button"
          onClick={setLink}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("link") && "bg-blue-50"
          }`}
        >
          <FaLink size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          className={`flex items-center text-gray-600 p-2 rounded-md`}
        >
          <FaUnlink size={18} />
        </button>
        <span className="h-[29px] w-[1px] bg-gray-100"></span>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("bulletList") && "bg-blue-50"
          }`}
        >
          <FaList size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`flex items-center text-gray-600 p-2 rounded-md ${
            editor.isActive("orderedList") && "bg-blue-50"
          }`}
        >
          <FaListOl size={18}/>
        </button>
      </div>
    </div>
  );
};

export default EditorMenuBar;
