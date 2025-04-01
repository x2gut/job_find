import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import EditorMenuBar from "./editorMenuBar";

interface TextEditorProps {
  setValueOnUpdate: (value: string) => void;
  placeholder?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
  setValueOnUpdate,
  placeholder,
}) => {
  const editor = useEditor({
    onUpdate: () => {
      const content = editor?.getHTML();
      if (content) {
        setValueOnUpdate(content);
      }
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "bullet_class",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "order_class",
          },
        },
        heading: {
          HTMLAttributes: {
            class: "headers_class",
          },
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: placeholder,
      }),
      Link.configure({
        autolink: true,
        openOnClick: false,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
    ],
  });

  return (
    <div
      onClick={() => editor?.commands.focus()}
      className="relative flex flex-col h-[200px] rounded-lg border border-gray-100 overflow-auto max-w-[984px] cursor-text"
    >
      <EditorContent
        editor={editor}
        className="px-[10px] py-3 focus:outline-none overflow-auto mb-[36px]"
      />
      <EditorMenuBar
        className="absolute bottom-0 left-0 right-0"
        editor={editor}
      />
    </div>
  );
};

export default TextEditor;
