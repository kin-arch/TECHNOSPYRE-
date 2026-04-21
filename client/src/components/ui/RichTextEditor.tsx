import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { TextAlign } from '@tiptap/extension-text-align';
import { Placeholder } from '@tiptap/extension-placeholder';
import { CharacterCount } from '@tiptap/extension-character-count';
import { Extension } from '@tiptap/core';
import { 
  Bold, Italic, Underline as UnderlineIcon, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Palette, Type
} from 'lucide-react';

// Custom Font Size Extension
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
    return {
      types: ['textStyle'],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize || null,
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {};
              }
              return {
                style: `font-size: ${attributes.fontSize}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize: string) => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize })
          .run();
      },
      unsetFontSize: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize: null })
          .removeEmptyTextStyle()
          .run();
      },
    };
  },
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setColor(e.target.value).run();
  };

  const setFontSize = (size: string) => {
    editor.chain().focus().setFontSize(size).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-outline-variant/40 bg-surface-container-low/50 rounded-t-sm">
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive('bold') ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive('italic') ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Italic"
      >
        <Italic size={18} />
      </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleUnderline().run(); }}
          className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive('underline') ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
          title="Underline"
        >
          <UnderlineIcon size={18} />
        </button>

        <div className="w-px h-6 bg-outline-variant/40 mx-2" />

        {/* Headings */}
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run(); }}
          className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }}
          className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
          title="Heading 2"
        >
          H2
        </button>

      <div className="w-px h-6 bg-outline-variant/40 mx-2" />

      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('left').run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Align Left"
      >
        <AlignLeft size={18} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('center').run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Align Center"
      >
        <AlignCenter size={18} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('right').run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Align Right"
      >
        <AlignRight size={18} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('justify').run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive({ textAlign: 'justify' }) ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Align Justify"
      >
        <AlignJustify size={18} />
      </button>
      
      <div className="w-px h-6 bg-outline-variant/40 mx-2" />

      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive('bulletList') ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run(); }}
        className={`p-1.5 rounded-sm hover:bg-surface-container transition-colors ${editor.isActive('orderedList') ? 'bg-primary/20 text-primary' : 'text-on-surface-variant'}`}
        title="Ordered List"
      >
        <ListOrdered size={18} />
      </button>

      <div className="w-px h-6 bg-outline-variant/40 mx-2" />
      
      {/* Color Picker */}
      <div className="relative flex items-center p-1.5 rounded-sm hover:bg-surface-container text-on-surface-variant cursor-pointer group shadow-sm bg-background border border-outline-variant/30" title="Text Color">
        <Palette size={16} className="text-primary mb-0.5" />
        <input
          type="color"
          onChange={handleColorChange}
          value={editor.getAttributes('textStyle').color || '#ffffff'}
          className="w-5 h-5 ml-1 opacity-0 absolute cursor-pointer"
        />
        <div className="w-4 h-4 rounded-sm border border-outline-variant ml-1 pointer-events-none" style={{ backgroundColor: editor.getAttributes('textStyle').color || 'transparent' }} />
      </div>

      {/* Font Size Setup */}
      <div className="flex items-center gap-1 group relative ml-1">
        <div className="p-1.5 rounded-sm hover:bg-surface-container text-on-surface-variant flex items-center gap-1 cursor-pointer border border-outline-variant/30 bg-background shadow-sm">
          <Type size={16} /> 
          <span className="text-xs font-semibold px-1">Size</span>
        </div>
        {/* Simple popout for sizes */}
        <div className="absolute top-full left-0 mt-1 bg-surface-container border border-outline-variant rounded-sm shadow-xl p-1 flex-col gap-1 hidden group-hover:flex z-50 w-36">
           <button onClick={(e) => { e.preventDefault(); setFontSize('12px'); }} className="text-left px-3 py-2 text-[12px] font-medium hover:bg-primary/10 hover:text-primary transition-colors rounded-sm">Small</button>
           <button onClick={(e) => { e.preventDefault(); setFontSize('16px'); }} className="text-left px-3 py-2 text-[16px] font-medium hover:bg-primary/10 hover:text-primary transition-colors rounded-sm">Medium</button>
           <button onClick={(e) => { e.preventDefault(); setFontSize('20px'); }} className="text-left px-3 py-2 text-[20px] font-medium hover:bg-primary/10 hover:text-primary transition-colors rounded-sm">Large</button>
           <button onClick={(e) => { e.preventDefault(); setFontSize('28px'); }} className="text-left px-3 py-2 text-[28px] font-bold hover:bg-primary/10 hover:text-primary transition-colors rounded-sm">Extra Large</button>
           <button onClick={(e) => { e.preventDefault(); editor.chain().focus().unsetFontSize().run(); }} className="text-left px-3 py-2 text-sm font-medium hover:bg-red-500/10 text-red-400 transition-colors rounded-sm mt-1 border-t border-outline-variant">Reset Size</button>
        </div>
      </div>
    </div>
  );
};

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder = 'Describe your requirements in detail...', className }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      FontSize,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder,
      }),
      CharacterCount,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap tiptap-editor-content',
      },
    },
  });

  const charCount = editor?.storage.characterCount.characters() || 0;

  return (
    <div className={`w-full bg-surface-container-low border border-outline-variant/40 rounded-sm flex flex-col focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm overflow-hidden ${className || ''}`}>
      <style>{`
        .tiptap-editor-content { 
            min-height: 150px; 
            font-family: inherit; 
            padding: 1.5rem; 
            outline: none; 
            color: inherit;
        }
        .tiptap-editor-content ul { list-style-type: disc !important; padding-left: 2rem !important; margin-bottom: 1rem; }
        .tiptap-editor-content ol { list-style-type: decimal !important; padding-left: 2rem !important; margin-bottom: 1rem; }
        .tiptap-editor-content li p { margin: 0; }
        
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #a1a1ae;
          pointer-events: none;
          height: 0;
        }
        
        .tiptap-editor-content h1 { font-size: 2.25rem; font-weight: bold; margin-bottom: 1rem; line-height: 1.2; }
        .tiptap-editor-content h2 { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.75rem; line-height: 1.3; }
        .tiptap-editor-content p { margin-bottom: 0.75rem; line-height: 1.6; }
      `}</style>
      <MenuBar editor={editor} />
      <div className="flex-1 overflow-y-auto max-h-[600px] relative">
        <EditorContent editor={editor} />
        <div className="absolute bottom-2 right-4 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest pointer-events-none">
          {charCount} Characters
        </div>
      </div>
    </div>
  );
};




