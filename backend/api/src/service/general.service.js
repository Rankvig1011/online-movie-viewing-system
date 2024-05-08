
 class GeneralService {
    constructor(model) {
        this.model = model;
    }
    async create(data){
        const entity = new this.model(data);
        return await entity.save();
    }
    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id){
        await this.model.findByIdAndDelete(id).exec();
    }
    async find(){
        return await this.model.find();
    }
    async findOne(data , option = null){
        return await this.model.findOne(data,option);
    }
    async findById(id){
        return await this.model.findById(id);
    }
}

export default GeneralService;