import Youtube from "@tiptap/extension-youtube"
 const YoutubeConfig=Youtube.configure({
    inline: true,
    width: 180,
    height: 300,
    controls:true,
    allowFullscreen:true,
    enableIFrameApi: true,
  })

export default YoutubeConfig