export default{
    name:'about',
    title:'About',
    type: 'document',
    fields:[
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'resumeLink',
            title:'Resume Link',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}