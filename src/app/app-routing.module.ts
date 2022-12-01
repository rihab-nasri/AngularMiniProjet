import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {ProductsComponent} from "./products/products.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {LoginComponent} from "./login/login.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {FormproductComponent} from "./core/formproduct/formproduct.component";
import {AddProductComponent} from "./core/add-product/add-product.component";

const routes: Routes = [
  //la liste des routes
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forms',component:FormproductComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'detail/:id/:name',component:DetailProductComponent},
  {path:'home',component:TestComponent},
  {path:'product',component:ProductsComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
