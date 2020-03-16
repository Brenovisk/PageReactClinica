import React, { Component } from 'react';
import './Consultas.css';

class Consultas extends Component {
    
        constructor(props){
            super(props);
            this.state = {
                realizadas : [],
                marcadas : [],
            }
        }

      
        componentDidMount() {
            this.callApi()
              .then(dados => this.setState(dados))
              .catch(err => console.log(err));
          }
        
          callApi = async () => {
            const response = await fetch('http://devup.com.br/php/api-dashboard/api/consultas');
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
        
            return body;
          };
        
    render() {
        return (
            <div className="container-fluid Consultas">

                <div className="row">
                    <h1 className="h1 mt-4 ml-5 mb-5 display-2 text-left">Consultas</h1>
                </div>

                <div className="row">
                    <div className="col-0 ml-5 pl-5 mb-5">

                        <div className="card shadow 100px 0px 500px">
                            <div className="card-header ">Realizadas</div>
                        
                            <div className="table ">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col  " >Especialidade</th>
                                        <th scope="col ">Quantidade</th>
                                    </tr>
                                </thead>
                                
                                <tbody>{
                                    this.state.realizadas.map(
                                        (item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td className="col-xs-1 col-sm-1 col-md-1 col-lg-1">{item.especialidade}</td>
                                                    <td className="col-xs-1 col-sm-1 col-md-1 col-lg-1">{item.quantidade}</td>
                                                </tr>)
                                        }
                                    )
                                }
                                </tbody>
                            </div>
                        </div>  
                    </div>

                    <div className="col-0 ml-5 pl-5 ">

                        <div className="card shadow 100px 0px 500px">
                                <div className="card-header ">Marcadas</div>
                            
                                <div className="table ">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col  " >Especialidade</th>
                                            <th scope="col">Quantidade</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>{
                                        this.state.marcadas.map(
                                            (item, indice) => {
                                                return (
                                                    <tr key={indice}>
                                                        <td className="col-xs-1 col-sm-1 col-md-1 col-lg-1">{item.especialidade}</td>
                                                        <td className="col-xs-1 col-sm-1 col-md-1 col-lg-1">{item.quantidade}</td>
                                                    </tr>)
                                            }
                                        )
                                    }
                                    </tbody>
                                </div>
                            </div>
                    </div>
                </div>



            </div>


            // <div className='Consultas'>
            //     <h1 className=" titulo mt-5 ml-5 display-2 text-left">Consultas</h1>
            //         <div className="row">
            //             <div className="col">
            //                 <div className="card mt-5 ml-5 mr-5 shadow 100px 0px 500px">
            //                     <div className="card-header ">
            //                         Realizadas
            //                 </div>
            //                     <div className="table table-transparent">
            //                         <thead >
            //                             <tr>
            //                                 <th scope="col" >Especialidade</th>
            //                                 <th scope="col">Quantidade</th>
            //                             </tr>
            //                         </thead>
            //                         <tbody>
            //                             {
            //                                 this.state.realizadas.map((item, indice) => {
            //                                     return (<tr key={indice}>
            //                                         <td className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{item.especialidade}</td>
            //                                         <td className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{item.quantidade}</td>
            //                                     </tr>)
            //                                 })
            //                             }
            //                         </tbody>
            //                     </div>
            //                 </div>
            //             </div>


            //             <div className="col">
            //                 <div className="card mt-5 ml-5 mr-5 shadow 10px 10px 100px">
            //                     <div className="card-header  ">
            //                         Marcadas
            //                 </div>
            //                     <div className="table  table-transparent">
            //                         <thead>
            //                             <tr>
            //                                 <th scope="col"> Especialidade</th>
            //                                 <th scope="col"> Quantidade</th>
            //                             </tr>
            //                         </thead>
            //                         <tbody>
            //                             {
            //                                 this.state.marcadas.map((item, indice) => {
            //                                     return (
            //                                         <tr key={indice}>
            //                                             <td className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{item.especialidade}</td>
            //                                             <td className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{item.quantidade}</td>
            //                                         </tr>)
            //                                 })
            //                             }
            //                         </tbody>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            // </div>
        )
    }
}
export default Consultas;