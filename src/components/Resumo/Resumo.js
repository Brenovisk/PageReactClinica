import React, { Component } from 'react';
import './Resumo.css';

class Resumo extends Component {
    
        constructor(props){
            super(props);
            this.state = {
                consultas : {
                    consultas_30dias_anteiores : 0,
                    consultas_30dias_posteriores : 0
                },
                faturamento : {
                    anterior : {
                        valor: 0,
                        comparativo : 0
                    },
                    previsao : {
                        valor: 0,
                        comparativo : 0
                    }
                }
            }
        }

      
        componentDidMount() {
            this.callApi()
              .then(dados => this.setState(dados))
              .catch(err => console.log(err));
          }
        
          callApi = async () => {
            const response = await fetch('http://devup.com.br/php/api-dashboard/api/resumo');
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
        
            return body;
          };
        
        render(){
            return(
                <div className=" pt-5 container-fluid Resumo">
                    <div className="Resumo">
                        <div className="row ">
                            <h1 className="h1 mt-5 ml-5 mb-5 text-center  display-2 ">Resumo</h1>
                        </div>

                        <div className="row ml-5 mr-5 ">

                            <div className="col mb-5">
                                <h3 className=" mt-2 ml-1">Consultas</h3>

                                <div className="row">

                                    <div className="col">
                                        <div className="card mt-2 text-center ">
                                            <div className="card-header "> 30 dias anteriores </div>
                                            <div className="card-body"> {this.state.consultas.consultas_30dias_anteiores} </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card mt-2 text-center ">
                                            <div className="card-header"> 30 dias posteriores </div>
                                            <div className="card-body"> {this.state.consultas.consultas_30dias_posteriores} </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col">
                                <h3 className=" mt-2 ml-1">Faturamento</h3>

                                <div className="row">

                                    <div className="col">
                                        <div className="card mt-2 text-center ">
                                            <div className="card-header"> Acumulado </div>
                                            <div className="card-body">
                                                {this.state.faturamento.anterior.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                                    <span className={"badge ml-1 " + (this.state.faturamento.anterior.comparativo > 0 ? "badge-success" : "badge-danger")}>
                                                        {this.state.faturamento.anterior.comparativo} %
                                                    </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card mt-2 text-center ">
                                            <div className="card-header"> Diário </div>
                                            <div className="card-body">
                                                {this.state.faturamento.previsao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                                <span className={"badge ml-1 " + (this.state.faturamento.previsao.comparativo > 0 ? "badge-success" : "badge-danger")}>
                                                    {this.state.faturamento.previsao.comparativo} %
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>                    
        )
    }
}
export default Resumo;