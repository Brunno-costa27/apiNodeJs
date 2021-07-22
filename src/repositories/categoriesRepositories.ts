 import {  Category } from '../model/category';

 interface IcreateCategoryDTO{

    name: string;
    description: string;
 }
 
 class CategoriesRepositories{

     
     private categories: Category[];

     constructor(){
        this.categories = [];
    }

    create({description,name} : IcreateCategoryDTO): void{

        const category = new Category();

        Object.assign(category, { 
            name, 
            description,
            create_at: new Date(),
        });
    
        this.categories.push(category);
    }

    list(): Category[]{
        return this.categories;
    }

    findByName(name: string): Category[]{

        const category = this.categories.find(categoria => categoria.name == name);
        return category;
    }

  }

  export { CategoriesRepositories }