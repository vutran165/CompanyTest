class ServiceEntity {
    public id: String;
    public content: String;
    public create_date: String;
    public imagePath: String;
    public note: String;
	public status: Boolean;

    constructor(id: String, content: String,
        create_date: String, imagePath: String,
        note: String, status: Boolean) {

        this.id = id;
        this.content = content;
        this.create_date = create_date;
        this.imagePath = imagePath;
        this.note = note;
		this.status = status;

    }
}

export const ServiceData : ServiceEntity[] = [ 
    {
        id: 'req.body.id',
        content: 'req.body.content',
        create_date: 'req.body.create_date',
        imagePath: 'req.body.status',
        note: 'req.body.imagePath',
		status: true,
    },
    {
        id: 'req.body.id5',
        content: 'req.body.content',
        create_date: 'req.body.create_date',
        imagePath: 'req.body.status',
        note: 'req.body.imagePath',
		status: true,
    },
    {
        id: 'req.body.id2',
        content: 'req.body.content',
        create_date: 'req.body.create_date',
        imagePath: 'req.body.status',
        note: 'req.body.imagePath',
		status: true,
    },
    {
        id: 'req.body.id3',
        content: 'req.body.content',
        create_date: 'req.body.create_date',
        imagePath: 'req.body.status',
        note: 'req.body.imagePath',
		status: true,
    },
    {
        id: 'req.body.id4',
        content: 'req.body.content',
        create_date: 'req.body.create_date',
        imagePath: 'req.body.status',
        note: 'req.body.imagePath',
		status: true,
    }
]
