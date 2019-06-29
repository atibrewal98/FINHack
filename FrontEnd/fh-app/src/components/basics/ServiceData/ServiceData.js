import React, { Component } from 'react';
import UniqueDataImg from '../../../images/main_page/unique-data.png';
import SurveyImg from '../../../images/main_page/survey.png';
import RoboticImg from '../../../images/main_page/robotic.png';




class ServiceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section4data: {
      
        0: {
          image: UniqueDataImg,
          heading: 'Heading 1',
          content: 'ye hai content 1 bhosadchod madarchod padh lo dhyanan  se lobve you 2'
        },
        1: {
          image: SurveyImg,
          heading: 'Heading 2',
          content: 'ye hai content 1 bhosadchod madarchod padh lo dhyanan  se lobve you 2 copy pasted another time'
        },
        2: {
          image: RoboticImg,
          heading: 'Heading 3',
          content: 'ye hai content 1 bhosadchod madarchod padh lo dhyanan  se lobve you 2 copy pasted  ...'
        }
      },
      loading: false,
      section4dataArray: [],
      section4Heading:'Our Services',
    };
  }

  
  render() {
    return (

      <section className='section' id='smart-data'>
        <div className='section__container container'>
          <div className='row'>
            <div className='col'>
              <div className='heading  text-center'>
                <h2>{this.state.section4Heading}</h2>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-4'>
              <div className='image'>
                <div className='image__container'><img src= {this.state.section4data[0].image} alt={''} /></div>
              </div>
              <div className='heading  text-uppercase text-center mt-4'>
                <h3>{this.state.section4data[0].heading}</h3>
              </div>
              <p className='mt-4 text-center'>{this.state.section4data[0].content}</p>
            </div>
            <div className='col-4'>
              <div className='image'>
                <div className='image__container'><img src={ this.state.section4data[1].image} alt={''} /></div>
              </div>
              <div className='heading  text-uppercase text-center mt-4'>
                <h3>{this.state.section4data[1].heading}</h3>
              </div>
              <p className='mt-4 text-center'>{this.state.section4data[1].content}</p>
            </div>
            <div className='col-4'>
              <div className='image'>
                <div className='image__container'><img src={ this.state.section4data[2].image} alt={''} /></div>
              </div>
              <div className='heading  text-uppercase text-center mt-4'>
                <h3>{this.state.section4data[2].heading}</h3>
              </div>
              <p className='mt-4 text-center'>{this.state.section4data[2].content}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceData;
