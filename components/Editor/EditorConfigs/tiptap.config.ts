import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Strike from "@tiptap/extension-strike";
import StarterKit from "@tiptap/starter-kit";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TextStyle from "@tiptap/extension-text-style"
import FontFamily from "@tiptap/extension-font-family"
import ImageConfig from "@/components/Editor/EditorConfigs/ImageConfig";
import { HeadingConfig } from "@/components/Editor/EditorConfigs/HeadingConfig";
import YoutubeConfig from "@/components/Editor/EditorConfigs/YoutubeConfig";
import CodeBlockConfig from "@/components/Editor/EditorConfigs/CodeBlockConfig";

const TiptapConfig={
    extensions: [
        StarterKit,
        Underline,
        HeadingConfig,
        ImageConfig,
        Link,
        TextStyle,
        Text,
        Bold,
        Strike,
       YoutubeConfig,
       CodeBlockConfig ,
        FontFamily,
        HorizontalRule.configure({ HTMLAttributes: { class: "mt-[5px] h-[2px]  bg-gray-200" },
        }),
      ],
}

export default TiptapConfig;