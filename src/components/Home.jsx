import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {KaliMobilAction,KaliMotorAction,inputdurasi,Back} from '../redux/action'

class Home extends Component{

    state = {
        isAboutVisible: false,
        tarif : 0,
        kendaraan:''
      }

    onClickBayarMobil = () => {
        var durasi = parseInt(this.refs.inputjam.value)
        this.props.inputdurasi(durasi)
        this.props.KaliMobilAction()
        this.refs.inputjam.value=''
    }

    onClickBayarMotor = () => {
        var durasi = parseInt(this.refs.inputjam.value)
        this.props.inputdurasi(durasi)
        this.props.KaliMotorAction()
        this.refs.inputjam.value=''
    }

    onClickMobil = () => {
        this.setState({ 
            isAboutVisible: true, 
            tarif:2000, 
            kendaraan:'Mobil' 
        })
        this.props.Back()
    }

    onClickMotor = () => {
        this.setState({ 
            isAboutVisible: true, 
            tarif:1000, 
            kendaraan:'Motor' 
        })
        this.props.Back()        
    }

    onMobilClick = ()=> {
        return(
            this.state.kendaraan==='Mobil' ? 
                <div>
                    <input type="number" ref='inputjam'/> Jam
                    <br/>
                    <br/>
                    <div style={{color:"blue"}}>Total Bayar <span style={{color:"black"}}> Rp.{this.props.Harga},00</span></div>
                    <br/>
                    <br/>
                    <br/>
                    <button className='btn btn-primary' onClick={this.onClickBayarMobil}>Bayar</button>
                    <br/>
                    <br/>
                    <br/>
                    <div>{this.props.Durasi} Jam</div>
                    <br/>
                    <br/>
                    <br/>
                    <div>Catatan = {this.state.tarif}/jam</div>
                </div>
             : 
                <div>
                    <input type="number" ref='inputjam'/> Jam
                    <br/>
                    <br/>
                    <div style={{color:"red"}}>Total Bayar <span style={{color:"black"}}> Rp.{this.props.Harga},00</span></div>
                    <br/>
                    <br/>
                    <br/>
                    <button className='btn btn-primary' onClick={this.onClickBayarMotor}>Bayar</button>
                    <br/>
                    <br/>
                    <br/>
                    <div>{this.props.Durasi} Jam</div>
                    <br/>
                    <br/>
                    <br/>
                    <div>Catatan = {this.state.tarif}/jam</div>
                </div>
        )
            
    
    }

    render () {
        return (
            <center>
                <div>
                    <h1>Aplikasi Parkir {this.state.kendaraan}</h1>
                    <button className='btn btn-primary' value='Mobil' onClick={this.onClickMobil}>Mobil</button>
                    &emsp;&emsp;&emsp;&emsp;
                    <button className='btn btn-primary' value='Motor' onClick={this.onClickMotor}>Motor</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    { this.state.isAboutVisible ? this.onMobilClick() : null }
                </div>
            </center>
        )
    }
}

const MapStatetoProps = (state) => {
    return {
      Harga:state.Count.harga,
      Durasi:state.Count.durasi,
    }
}

export default connect(MapStatetoProps,{KaliMobilAction,KaliMotorAction,inputdurasi,Back}) (Home);
