import Image from "next/image";
import imgAbout from "/public/image/header-bg.jpg";
import imgProduct from "/public/image/1.jpg";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          kevala<span>ceramics</span>.
        </a>

        <div className="navbar-nav">
          <a href="#home">Home</a>
          <a href="#about">Tentang kami</a>
          <a href="#products">Produk</a>
          <a href="#contact">Blog</a>
          <a href="#blog">Kontak</a>
        </div>

        <div className="navbar-extra">
          <a href="#" id="search">
            <i data-feather="search"></i>
          </a>
          <a href="#" id="shopping-cart">
            <i data-feather="shopping-cart"></i>
          </a>
          <a href="#" id="menu">
            <i data-feather="menu"></i>
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <main className="content">
          <h1>
            Lorem, ipsum dolor. <span>ceramics</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed.
          </p>
          <a href="#" className="cta">
            Beli sekarang
          </a>
        </main>
      </section>

      <section id="about" className="about">
        <h2>
          <span>Tentang</span> kami
        </h2>

        <div className="row">
          <div className="about-img">
            <Image src={imgAbout} width={1000} height={300} alt="About Up" />
          </div>
          <div className="content">
            height={300}
            <h3>Kenapa memilih ceramics kami?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
              sint? Aliquid nobis facilis, quo vel quas alias adipisci officia
              iusto!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              totam placeat dolorem, sint aperiam sunt repudiandae non laborum
              vel quod.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <h2>
          <span>Produk</span> kami
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          dolorum quo voluptas off icia velit. Voluptatum.
        </p>
        <div className="row">
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- bowl -</h3>
            <p className="products-card-price">IDR 100K</p>
          </div>
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- allo -</h3>
            <p className="products-card-price">IDR 200K</p>
          </div>
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- bowl -</h3>
            <p className="products-card-price">IDR 100K</p>
          </div>
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- bowl -</h3>
            <p className="products-card-price">IDR 100K</p>
          </div>
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- bowl -</h3>
            <p className="products-card-price">IDR 100K</p>
          </div>
          <div className="products-card">
            <Image
              src={imgProduct}
              width={1000}
              height={300}
              alt="bowl"
              className="products-card-img"
            />
            <h3 className="products-card-title">- bowl -</h3>
            <p className="products-card-price">IDR 100K</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>
          <span>Kontak</span> kami
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, facere!
        </p>

        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114608.267027784!2d112.630281347511!3d-7.275441716727254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1731517469219!5m2!1sid!2sid"
            loading="lazy"
            className="map"
          ></iframe>

          <form action="">
            <div className="input-group">
              <i data-feather="user"></i>
              <input type="text" placeholder="name" />
            </div>
            <div className="input-group">
              <i data-feather="mail"></i>
              <input type="text" placeholder="email" />
            </div>
            <div className="input-group">
              <i data-feather="phone"></i>
              <input type="text" placeholder="handphone" />
            </div>
            <button type="submit" className="btn">
              kirim pesan
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="socials">
          <a href="#">
            <i data-feather="instagram"></i>
          </a>
          <a href="#">
            <i data-feather="twitter"></i>
          </a>
          <a href="#">
            <i data-feather="facebook"></i>
          </a>
        </div>

        <div>
          <a href="#home">Home</a>
          <a href="#about">Tentang kami</a>
          <a href="#products">Produk</a>
          <a href="#contact">Kontak</a>
        </div>

        <div className="credit">
          <p>
            Created by <a href="">wahyudisantoso</a>. | &copy; 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}
