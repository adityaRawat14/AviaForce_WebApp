
import { Node } from '@tiptap/core';

export const ImageConfig = Node.create({
  name: 'customImage',
  group: 'inline',
  content: 'inline*',
  inline:true,
  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      'div',
      {
        class: 'inline ', 
      },
      [
        'img',
        {
          ...HTMLAttributes,
          src: node.attrs.src,
          alt: node.attrs.alt,
          class: node.attrs.class,
        },
        
      ],
    ];
  },
  addAttributes() {
    return {
      src: {
        default: '',
      },
      alt: {
        default: '',
      },
      class: {
        default: '',
      },
      width: {
        default: '',
      },
      height: {
        default: '',
      },
    };
  },
});

export default ImageConfig;

//@ts-ignore
const addImage = (editor, imageAttributes) => {
  editor.chain().focus().insertContent({
    type: 'customImage',
    attrs: {
      src: imageAttributes.src,
      alt: imageAttributes.alt,
      class: `w-[${imageAttributes.width}%] inline`, // remove mx-[25%] and add width class
    },
  }).run();
};

export { addImage };