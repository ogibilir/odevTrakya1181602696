import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Hero from '../assets/images/hero1.jpg'
import Axios from 'axios'
import logo from  '../assets/images/traptv-logo.png'
import {FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaUser, FaQuestion, FaGlobe} from 'react-icons/fa'
import {FirebaseUrl} from '../components/api-key'
class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      email: '',
      subject: '',
      query: ''
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state);
  }
  postMail = () =>{
    const url = FirebaseUrl+"/emails.json"
    const data = JSON.stringify({
      "name": this.state.name,
      "email": this.state.email,
      "subject": this.state.subject,
      "query": this.state.query
    })
    Axios.post(url,data).then(res=>{
      console.log(res);
    })
  }
  render(){
    return(
      <section>
        <Container fluid>
          <Row noGutters>
            <Col>
              <div className="hero-img">
                <img className="" src={Hero} alt="Film Dünyası"/>
                <h2>FilmDünyası</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <br/>
        <Container>
          <Row>
            <Col>
              <div className="det">
                <h1 className="highlight">Türk Film Sektörü</h1>
                <br/>
                <p>
			Dünyada ve türkiyede filmler çok benzerlik göstermesede genellikle türk yönetmenler 
			sahne çekimlerinde HollyWood gibi büyük film sektörlerindeki filmlerden etkilenmiştir.
			Özellikle parodi filmleri çok olan türk sinemasında Başta "Gora,Yahşi Batı,Kutsal Damacana" 
			gibi filmler çok büyük gişelere ulaşmış ve türk sinema kültürüne "Parodi Komedi"
			sektörünü ulaştırmıştır.		
                </p>
                <br/>
              <p className="traptv-logo tmdb-logo2"><img className="" src={logo} alt="TrapTV"/></p>
              <div className="fancy-highlight fancy-highlight2">
                <ul>
                  <li>Dünyaca ünlü filmleri bulabileceğin bir siteye hoşgeldin ! </li>
                  <li>Dünyadaki tüm filmleri popülerlik sırasına göre sıraladığımız bu sitede istediğiniz filmi bulabilir, çok beğenilmiş
			 filmleri keşfedebilirsiniz</li>
                  <li>Veriler TMDB Sitesinden alınmıştır. Siteye girip filmleri oradan oylayabilirsiniz</li>
                  <li>Popüler isimleri de keşfedebilirsiniz</li>
                  <li>Film dünyasında isim yapmış kişileri bu siteden arayabilirsiniz</li>
                  <li>Filmlerin verileri apilerde tutuluyor.</li>
                  <li>Filmleri yaşa göre veya tarzına göre sıralayabilirsiniz</li>
                  <li>Veriler TMDB den alınmaktadır</li>
                </ul>
                <div className="">
                  <a className="tmdb-link2" href="https://github.com/yunghog/mov-rec" target="_blank" rel="noreferrer">View Source</a>
                </div>
              </div>
            </div>
              </Col>
          </Row>
          </Container>
          <br/>
          <Container>
            <Row>
              <Col>
                <div className="det">
                  <h2 className="highlight">TMDB Nedir ?</h2><br/>
                  <p>
                    2008 yılından beri faaliyette bulunan, alman menşeili, film ve diziler hakkında bilgi alınabilecek, kullanıcıların bilgi güncelleyip veri girişi yapabildiği, kullanıcı katılımlı film ve dizi veritabanı sitesidir. 
			  imdb nin en iyi alternatifidir. barındırdığı afiş, resim, videoları ve tasarımı ile imdb den daha iyidir. bir çok dil desteğinin içinde türkçe de vardır. harici site veya programların sitelerinden kolay bilgi 
			  çekmeleri için kendi apileride mevcuttur.
                  </p>
                  <br/>
                  <p className="tmdb-logo"><img className="" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TrapTV"/></p>
                  <div className="fancy-highlight">
                    <ul>
                    <li>2008 yılından bu yana her yıl veri tabanımıza yapılan katkıların sayısı arttı. Platformumuzu kullanan 400.000'den fazla geliştirici ve şirket ile TMDb, meta veriler için önde gelen bir kaynak haline geldi.</li>
                    <li>Filmler, TV şovları ve insanlar için kapsamlı meta verilerin yanı sıra, en iyi yüksek çözünürlüklü poster ve fanart seçimlerinden birini de sunuyoruz. Ortalama olarak, her gün 1.000'den fazla resim ekleniyor</li>
                    <li>39 dili resmi olarak desteklesek de, kapsamlı bölgesel verilere de sahibiz. Her gün TMDb 180'den fazla ülkede kullanılmaktadır.</li>
                    <li>Yazılımcılarında çokça kullandığı bir sitedir.</li>
                    <li>Güvenilir olmasıyla birlikte geliştiricler içinde çok yararlı bir sitedir.</li>
                    </ul>
                    <div className="">
                      <a className="tmdb-link" href="https://www.themoviedb.org/about" target="_blank" rel="noreferrer">Ana Sayfa</a>
                      <a  className="tmdb-link" href="https://developers.themoviedb.org/3" target="_blank" rel="noreferrer">API Dosyası</a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br/>
          <Container>
            <Row>
              <Col md={{span:"8"}}>
                <div className="form-control-contact">
                  <h2 className="">Bizimle iletişime geç</h2><br/>
                  <form onSubmit={this.postMail}>
                    <Row>
                      <Col md={6}>
                        <div className="form-element">
                          <label>Name</label>
                          <input name="name" placeholder="İsminizi Giriniz" onChange={this.handleChange} required/>
                          <span><FaUser/></span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-element">
                          <label>Email</label>
                          <input name="email" placeholder="Mail Adresinizi Giriniz" onChange={this.handleChange} required/>
                          <span><FaEnvelope/></span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="form-element">
                          <label>Subject</label>
                          <input name="subject" placeholder="Konu Başlığı" onChange={this.handleChange} required/>
                          <span><FaQuestion/></span>
                        </div>
                      </Col>
                    </Row>
                    <div className="form-element">
                      <label>Query</label>
                      <textarea name="query" rows="5" placeholder="Söylemek istedikleriniz" onChange={this.handleChange} required></textarea>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-1" type="submit">Maili Gönder !</button>
                    </div>
                  </form>
                </div>
              </Col>
              <Col md="4">
                <div className="card det card-dev">
                  <img src="https://avatars.githubusercontent.com/u/41548444?v=4" className="avatar" width="100%" alt="TrapTV"/>
                  <div className="card-body">
                    <h4>About the developer</h4>
                    <p>Benim adım Oğuzhan Bilir. 208 Studios şirketinde Oyun yazılımcısı olarak çalışıyorum </p>
                    <p className="socials">
                      <a href="https://www.linkedin.com/in/samartha-hm-7398861a1/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                      <a href="https://instagram.com/samartha__" target="_blank" rel="noreferrer"><FaInstagram/></a>
                      <a href="mailto:samarthaog@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope/></a>
                      <a href="https://github.com/yunghog" target="_blank" rel="noreferrer"><FaGithub/></a>
                      <a href="https://yunghog.github.io" target="_blank" rel="noreferrer"><FaGlobe/></a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        <br/>
      </section>
    )
  }
}

export default About
