import { useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import "../../styles/AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      <Header />
      <Menu />

      <main className="about-content-area">
        <section className="about-hero-banner">
          <div className="hero-container">
            <div className="hero-info">
              <h1>Về Chúng Tôi – Thời Trang Cho Mọi Nhà</h1>
              <p className="hero-desc">
                Phong cách hiện đại, đa dạng. Phục vụ mọi thế hệ với những thiết
                kế túi xách tinh tế nhất.
              </p>
            </div>
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop"
                alt="Banner Bag"
              />
            </div>
          </div>
        </section>

        <section className="about-mission">
          <div className="mission-container">
            <div className="mission-images-grid">
              <div className="image-stack-base">
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1976&auto=format&fit=crop"
                  alt="Sketch Bag"
                />
              </div>
              <div className="image-stack-overlay">
                <img
                  src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop"
                  alt="Fashion Model"
                />
              </div>
            </div>
            <div className="mission-description">
              <span className="gold-label">CHUYỆN VỀ AAAAA</span>
              <h2>SỨ MỆNH CỦA CHÚNG TÔI</h2>
              <p>
                AAAAA ra đời từ niềm đam mê mang đến những chiếc túi xách thời
                thượng, hiện đại và chất lượng cho mọi thành viên trong gia
                đình. Chúng tôi tin rằng phong cách là sự tự tin, và sự đa dạng
                là chìa khóa mở ra vẻ đẹp riêng biệt.
              </p>
              <div className="about-quote">
                <p>
                  "Lấy cảm hứng từ sự thanh lịch vượt thời gian, chúng tôi tạo
                  ra những sản phẩm bền bỉ cùng năm tháng."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-lifestyle">
          <h2 className="section-title-center">PHONG CÁCH SỐNG</h2>
          <div className="lifestyle-grid">
            <div className="lifestyle-card main-card">
              <p>
                Phong cách sống là cách chúng ta chọn để tận hưởng từng khoảnh
                khắc. Mỗi chiếc túi không chỉ là phụ kiện, mà là người bạn đồng
                hành.
              </p>
            </div>
            <div className="lifestyle-img">
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop"
                alt="Life 1"
              />
            </div>
            <div className="lifestyle-img">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGBobGBgXGBgYFxcYGBgaFhcYFRgYICggGBolHRgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx8tLS0tLS0tLy0tLS0tMC0tLS0tLS0vLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEoQAAECAwUEBQoEAgcHBQAAAAEAAgMRIQQSMVFhIjJBcQUGEyOxM0JSYoGRocHR8HKywuEUghUkc5Ki0vFDRFNUY5OzFjSD0+L/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgIDAAMAAwAAAAAAAAABAhExQRIhMhNRYQMiQv/aAAwDAQACEQMRAD8AtaGeV7vLLIK8Rkom7KgyzORQnynGM34D0uDRNGjuHaA7RmOM5UdrzXE7TbiA9h0CYgkdqB+LxCRtcUHs5YjH3o8I/wBYFeDvBqV4M30g2bDy+S8zaY8VhF2WDZz4zEhLVemt247ksF7rwaATMs+IwRiKz+lXOFmeH8Wu/IUDq6R/Bt35324Xpbwlgi9M0gPqTsux4bJQOrUX+qtHaAbTcZekCtP+UX6a8a73lXjZbwdkdNEpEeA5u0+Vw8DmNE5HfWL3jdwZZHXVDEyR3jNx3Aeqc1KgIIa4MF58r+R10TEa6C7bM58ZYTGmnwUsjyGs2272XM5o3aEmKS5mN0UOMsd7MoJSM5oce9O5hSeHJUbFF6H3pwON36K8UuJdtN3cjx9qq1z70PaZgc+Wf3NBhduLrO987DZ4Hkk7Q4Sd3unm8CBknXOfdbVmJzyJ+aHGvEHc3jnxIKISpiACJ3o3PVyKJZIw2JxR5P1abtFW23w142atA46zRYD3gtGzua5jRPoF2xhKF3gxJ830XLO6Ri7G8HbbsJcS5aDS+UKjcCcT6P7pS0wi5gmBVz8PxFE5F4YNpjXqChCP0c2pmfNHiVpQeiGubeIwKVbCuxIgHBrZe0lXtGrzTIY0new0WHbpfxTJOGA4albDR4LGiD+ttwNBpmnBl09C5xuxNtuIGHqt1V4pde3m7h4az9LRciNNx2w2rwMfwjJWtDDN5uNo3P8AFos1ki112HtNoDwP1Q4TSGk3m1dlrzRiysMXG4HiK0GiXcCGbjavzH0VpN9o70me791EDsj6Dff+yiR7epY6Qize2rZnDLmixos3gXmnZyHpDVWtBPeUG7rkdFSM43mzA3czm0ZLJcBtbqN5nxR4EXv2cj4BK21+7zPirWV3fj781OcHWzbokw4aLAsUcEQ5ZSWtaHbR1CxbBD2WH7wCXRdkumrQCyKwToHflKt1Uaf4VtGnabxM99uiP0rAHZxjKsnflcluqjB/CN2Adptdn0xqr3/qi/TdjB04uy3dAxOTtEOA119mw3czOgy0UjMb3vdmjRlrqqw2i+O7dRuY09bVSpdk+zYezbQ55T0VGtIY7umzJrXjeGiA+BPsxcfJzpmR56osRomdh+OZzGuiYdiw9+cJs5Zj6IYh1b3bcNEWIwbey/dzOQ1QZNBbsxN3N2fNIOOgiTO6GIyz/ZLx4YuOPZVDx6OYp4pksBaykQUNNrSXFLxS2X+0kXetn9E4Qccte55ELZaz1cSOaOyGL3kfMHo580CK1oEXylZenkiF4Bce98n6+qYChsHd91W4fRybXFSEBdYbsqvPCu1PgVZkg6HV+4fT9VDgkXGY7pNZ8ZYTSMzDiyhcysdzu8ifhZ4uWkTKGOfxWUaxImez81WJUR/yCxgAbXgTQYcv3WyTiseDL+MdiJAYchoqiMunoXMFzdd5QcfWAzxXbVd7zZfQN4mlDqqzF1ovuq88D6ROStaiJRNtxplkBjRSonGADhsvoMzprzS82kQxJ3FxqdZcU1GeL52zu5CteSUgMAubZwOWXJVCH2Mn/wCL6qIfbj03fD6LqNDb1kYTdEHZ4MBxH3wXbQ26RsEbGMxSRac1QQwO1kX7vG8eBVrS+vnSuHEGWLdFi0K2l+HM+KvYXd+3mfyFLR4mGd4o9mEo8PV3jDcjo61baK/ynwWRYTsM++AWvb972BYlkOy374JTg+17e6cGNyd4FJdUpfwjau3m4T9MJu3xB2UXVp8El1QigWVm35wy9JXPlGX023kd9V+7keIONNVwyMTefK5kePs5LpiiUXvBgOA9FV7aUSkRu4Rwzpx0SDkF4LYe0/3ZT0VQ7f2378t3X8OqqLTd7M32yI4DDZrOq7CtBujvGTL54etz5JgSOR3neOwEtnTkgveJ+Udu5DXRFixqRO8ZiOGUtUJ0Q3nbbDsZc/WSDrIg7vvTgeApSeSWjOFwd4d6lBwJ0yHxTMJ5mwX2YfMDNBjRCOz24e9P3zB46IBePGBZE7zFwGArOQyyV48UDtD2nmCVBWh0QzDNdpvlKCst4Vx0RrQ90otW4AYHi3hXVUSpigPA7TBmmYwS8N2w3anJgyphkmYjnXnmbdz/ADHNBiOk0Ay3BgkYgOx7Vj3tt/MLWfEkwcj81jQqxHcx4BPEsujYYamU6rHsbv65EMwMMeQWwxprVZHRwP8AExTSh48lU7Tl03oT6Qu8biT8HGtdVyNE2Ttsq+WHrAZ6I0Bju6Em7uegGSo4Etbstq8kVObjkpURjxDtm+3ZA4aV4qjXm8NttG5Zy1XbQD3my2rpY5ywohshOvOo0gNpXnoqSX7X1x7j9V1d7I+i33/sor3E6r17LSS57SZbGnraIkZ0yNoHYOWbVd7jN5BbWGOGjtVR7yS2ZErhpXNoXO3L2mAA0H1iiwz3kMng8S9rHIcQOrSYLuM8lyK+UWGPWH5XKYqtS3na9yxIBk1ssVrWmJMtNeCyGDZHMonA7UtMTZiTnK6fBA6muP8ACsExvDxnmmLYB2UQcSD4JTqfDJs0PZbvDjXHkrnyzv1G6+IZRat4Tocm6qsUvvOM20bPjmSqxGGUSbG4jLJui7Ehyc/YG4KTGbtNEjcgOcezGzumWOEgoy9syu0driXE/JJiFO424AQ05erorWOEbrJwwSXEk0rvJg5FvXYlGb+ubdEu9zpxKM3M9HaLr2bLu6HlNPSAS0VgnEPZjDSlCgG4bHAjZYdg8TmNEvHY7udhmB48CDpqrNaA4915mmZ1QbRBn2QEM7k8W4gDVEIsYhEmljZmIZa1OiZiwjKJNjN5ox0aMktBhtcIZ7MzvO4j1qYpiI0XXbBrEHEek0SxVFHLRDPem43cH6tFW0iRAkBsjD/QKWpnlRddgAKjLmq2yh3SKDH26pKVjnZWVB33n1v0haNpFPcs2zGrtT8gqx4TeWlBM1h2ETjRzIGp+AWp2pOkprK6HE3xqEzcRT3Zp49pz6embD7wSYKMOWYCA1g7ru8STwyP1TBID3TD6MHE5u10S7JDs9/c9bIaqFEI0PEXDV2YxDpZrglJ5uHgMRjLmuWh1GHb3yTvZuKpcBvO26uHpaD6rRJz+D/6fxH1URpj0Yn+JRTuq1G0wViNuto35OlwRZbTdlo2T4jRJOZKI83TuZj1tUyBUbB3DLCm7qsquCWh8pjhP5JW0yL4RHpfIo7nTa7jRJRDIwfx/IqYun7REM2nhMeKzoJMhzd4p57hsVy8UlDPDV3iU5wXYdufsP5FL9TB/V4exPaHEa6pi0snDeaUByySvUuX8PDne3uE5YOPBXPms8vqNaNTtNg744jiGUxUtBrE2Hbg4j1j6S7agO8O3vt9L1Ah2i7eiSv7g9LiHpKciMDYkM3XVYZifHZ1XIUpQ9h/nHe0d62qFaIgvNM4lG5O9IaaKljjB1yTnykeDsZHRMjUaV2V2JWJLePpfiQYrBKLsv8AechjVEc4XRtP8pkfSOiE5wlF2n4jgcmj0UARzJOdR9GZu9bVcitAdDpE3Dxd6uvNSI8TibT9zL8Xqqttii+Np9Gg4Z3R6KATsxGx5TeJ48QT80y8i759YvrcHz+SQZEkYUnOkQOAylknHPEhtu8o7gPScfRVVMSO6kXf3gOOTcfegW5+1xwGPtzRIjhKJtGr28B6miFbXTdiTQfNKGpaTshIWZ2Ocz9E5azQJKynZJ4zPiqnBXkZkW6ajEJDoEi9Eq4TfwE/PGieJJSPV128b0tv9YVTiovMejivrEN5+4PNrg71VQ0c0XnUYfN5D0VI0WYid4PNbw4gfVSJH2z3jaNGWZ10Wa2ZFNIe0cJ4DI6KsB+yNo1fkM55aIjolYe2KN+Q1Q7NEozbG8f1arRJ/tP+o73D6KKXz6bfcPqopU2Im+87W6M/WVxvNG1unP1UOe1Vx3AcPxaK7XgOabxOzhIerosmhq6RMDiCFkWp52BlEC0IseTisWNEJcJ+m3xU4RWVaMSKGgONAEs2KDQYzd4n6LtqiAQ6CZSticCXDjecdBMzWkx/12yudmejUcbDtAUp1NcOwh7ThtZaHRORWSY7P9kj1OiSgQ9sDb48nJT5p5fUbNqdSJtnfbw/Bog2iN5XbOA4DhPRFtMWj9tvlG5Zt1S0eNSLtt3dMjqiGjyL5HaHdPAZjRD6OkAzvJUngMuSPDid4e8buZDPmh2J+5tt3cvVGqZL9rstlEHlDwGbqqr41H94N8cBm0TW10Z1ftEVjDstaHEzc0ikzgJzPBXtVgssGbY9uhNcXXpXmNMxKki4ngnpNyk7YlojDve8bujgMiqW6PtnvG7gy4Hmtd1ls8W+IFtguc4Slea7hkHT4pTpXo+Mwuc4Nu3JTAMsSc6cEuORMpeGPDd5HvG4aUw1R2xKN7xvlHZZv1VLK8zg1bRuX4dUaBMiHVu87ho/VOnAXvo7bbWI3xbqqdIGb8QaCowR3h0sW1i+B/ZL9IO7wzlwwwwQZS1u8EvYoWzeOEz+Yrtpcr2N84YEsSfzFPpPa8YtMyEj1ZNMRv8AHnPPRPx2kAiQlJJdVgZNoN7jyJy0VT5qcvqN4uO1VtYjf06oVpc6cTd3Bn6y65td1vlPD2aIUdnldhm6PA6aqFFok+0AN3dMveEvY2EObhgfv4o9oZt7jaNzzJ00Q7LC2mbLd3PlornCezkzm1RJ3/Vb7/2URo/J6JkST3SeN3TN2quItW7Tdw8Pw6oTXHtH1buj9WquHVZu+TP6Vi1ctL9uiz7T5rvXHinSZOqlOkcGH1x+YJY8nlwPGmWSz+qUsoIcZil7HWiZY/AKlmbMTJ853irmWppHhvKU26DJjqjDxks7qeT2EORbv8fwu1TRaJFJdTx3LKNO0cfwu0SnzTy+o2rS90nVb5QeLdUraXGUWrcP0nVHitodlvlB+YaJaPDPebLeAx9XklAPW/i3yeuZ10Xpuj7FCscFlote/ICHDAmZkCQu+c+nsWf1dssNrolqjhrYMBgcTjNwmZYcKHmQsy1W+LabR28Voq13ZsJpCZNsqS3zOZOsuCvGSTdZ5W2+MH6V6YtFrLC9/ZwnEgQWOIwDj3r21caCgMuazewa0GTIY70cK7w4qQcIWw3E+3ZdoqBkxK43yh/MdNEXK08cJOHbVY2vbFvQ4ZlLEYbLcKaqQo0eyucILr0MCZgxHFzCJkSY41ZQckaLA39hu83jozRLW+HWLsNEmyoeZy1Sl6GWMpmG6DGlGgNDS2kSE4SMMkgz5U5KlkhUh7LeJ/wnTVZpgRGvESCAIjRgDR4nVjs5hO2KOyIWOYwFpDjLAjAFp5GY9yqz16LG6uqtco3ZbWIfF2mizre7vHCgrh7E40Uh7HnOOIycse1AmM7gJ4ZIxns8qJHZRVs7pQxL7qilpIymk4TtkJwXk295LXTPD5Jbqw3Zbsg1P5Su2h+yTk330K51abRtDgTQ8tdU5xU36jVe2RGwKxHccryrGb5TYxIGOjQukblHVLuP4tVUt2SZPq8cciBnopUVtYq/ZlIZ8ypCG1u4Nz+8lW3YxKO4DHTnquzkXUdRo4nXVV0ntmXtD71EbsRkVFptn4179lhhznSfGv7LlqsMNrS4ETDTLDLloFodmAat8EtbLPsOBBwPBc23RpkthzdVI9KN2RkHD8wWh2rQeYS1tAfD/mb8XDFRjzGmXFKwokgDqi2ZwuClbzvFJtEzLKvOXBM2Z8m/zHxK0yiMaNOhlkfBWg9HCBdY1ooJzNeFTykVbM5jD2LTbAnwmTIVPE0E9EsboZTbBi2yRIutInPA1rOei620znNja44rWf1Ujznse8/RNWTq1EE7wB2TKTjMO80kS2hwlMYq9s9z9kesNtBZZ7FDkWjvbRdwLxJwhkjIls0mHyr2YnKQx++C07V1biQ+zuMc4m9MASuF5D3EnIkAUPDhNcHV6OeAHMk+CLkWOpyyRaGC7NgEiAPbs/NbZ6sxZ0DMZ7zuNctUraerEW7MltJk73omXDOS+hXKA5geCVv6Fy9vFP6BiyO5iCau4S00Xn7U7ae1zazLXVPm7JkvqMaHsnkV82t8J0W2R4cNk5PmTw2tv9SWOxMv2UEUAkgY6nX6rOsT3QIz2ymx202pkC4BzmzGBwovWQ+qkQ4uA0uz+abh9AdnS4Yoa0kAhob2hxMicZXRWmzg6iqZTgsterHlDagAKHZw2jlJLMjScSBnrrivRWjqzHiOLiGtnwAFPY2i47qtEa07V48KSnpOaNw5WE58wFmw8AtC0NAIGEhXmsqE6g5BPE8qYimbS2lRL3o/R4EGQk40PGWX0SZNaZhNxHexNPPscW1uzR2zPzs1w25spbW9PEZzSMRqpc1T9DdNxYrXB28LxB4afRUMUVq6olw1+qCGaqdnqgGO2b63wUQOx9YKI2Pb20Vjch7lQhsv3KJteiqPvegsmgb5DED4oJDZSuiSYDneiEIh44D3IPYfYNFQ0D2IXYMPm+KaD3hVIfjLwCeyLuY37LvqtDq82dpgibt/iXEUaXChOiWuuWp1XhE2qFoT+Rw+aIWXD6K9omqFoVnGpVCVXpgqWhcLQukqpckAbUwXXfhPgo07LfwjwVbU7Yd+E+CoHbLfwjwUmu80PJeM6EcP6RtnOF/4Ya9bEfQ8l43oavSNq/8Ai/8ACxE4oe1JCqXLhXEjdmhRiACckSSDEFCNEg+TdNtlaI4yixB7L5I+BCzuzC2OtAItcalCWOH80KG4/ElZgecluc4CMPVQuPpH79i64nJDJ0QFy8+kfh9FQPOfh9FUlVmnotr3/un0Vb3NVmuTQW17+pUVFEDb6dcrirGEEk1rjw8UZrTkud0jOgjmqshKvYvyKoYbsj7kjWMAcFW5XCS45pGapeKAu6EtPqtC/rLNGk/Fo+aybxWr1ZtF2PUEns3SkMiyeJGarHlGfzXsyVQlYNq62wYZuuEUHSE4+CXPXGCcGxv+y9WwejcVQlefHWyEfMj/APZcnOjel2xnFoDwQJ7bHMnqJ4/up9g1bnd2/wDC7wKjjhyHgqWyILjgT5p8EWO2vsHgkZa0Pk08ivOdXIU7ZbHcL7B/dgsBW7btx3I+CV6uQwO3cOMZ/wADL5Il5OtqSrdWR0t0+ID4bCyJEdEv3RDDTRl2ZJc4S3wlYnWhw/3S0e6F/wDYnonoXIBXm4nXAj/dbT/dhf50A9cx/wAtaPdD/wAyPGjbE66iVo5w2H3XmfpWDeElqdZekhHiNcIb2SZLblXacaS1JWKSVrJ6OUUkITiqElUcSnobEJVZoMypMo0W11wlVDl0uTJJriiiA9VZ7fGlMxKcgmIHScYHf+ASjhMacJ6KjBM0+Xt++anUXutJ/TkeYAec8G4e5dsvTFoc2ZfUmlABJY8jde7iTdHt/ZP2YYNrsitPv7CVxgmVEt3SkVpkX+4BKxOlos96dMgqRAXvMzMN9iAGzJrj4JzGC5VrstMUNBe6UxPAc1udSS51oJcZhsI+y84ZfhXnnuphlLjzXpuoQ7yKcobMuLn/AEU6gyt09TFsTSZkBVFibkE2SqOKhIP8O3IJWM2UaFLC7EH5JfNOuckbaZOhu4B9dAWkeN0e1IF7S1rnsD71y80uulwJleuzuEEi/cmMM6TTNs6Qht9L+4/6clSIaGVDwx5j4o38QHieGYOIIxBSl9GxbZ0tCIIk8jSHF005/BA6ox3OFoJDg0xiRepWUnyHAXp+2a0ekLSxjSXEXRvHgB8ycAMSSqdCBwggua4Oe577sjS+4vu5UnL2I6DJ6XrbbKMmRz73sH6VvuAWBfES3C6Z9lCuuIqA97y4tmMSBKa3nIy6EAiQweCXfZ25Jt5S7ypN4jr0LhgkYERB7nA/qXlhEJXsOvfk4Z9d497WH5LwzYl0rr/x+8WWV1THamauQTgUIETnwCI2IFWi2G57hw8V2+SJiXxVouaFDOIz8UaPdWYb2BC65rlyEAJOTIcPvL9kaEpWbslE7d5qJeh7b0cC5iRWkpcM/er2Gzkyxlx14U4n90Nz5uuyoPH/AFTMOMwTBLQWgEOdMDNwMjwmwzGF80NZQ0JW+23XlsMG6wlobKTosWe1J0iSAAZiRGE8QqsttO0lV0mvu1DXiZlMUlKWHEotttBuMBZDILZBwLi51Zya8PNMDV0scgsS2WicPYlKbg5sjd8xuJdqTOXCYxVSJuWm1ChSZezM8DLRcgNx1xyl9j4rlgtBMFocRQacga4IPbjdb75pGda28z20l9+1et6gy74j1R7pn5ryEGGOBM9DX4L2nUSHJkYylttH+BpU5cB6cuVC5de5Bc5Y7C5KG4TFVUuXLyWzIxuiYZM9saB7wPYAZBC/opjZljntccSHurLCczI+1PPeqX0bPTBj9W+0cDFixIgBmGuOyDmGiQnqm/6CgSqwH2laJeql6PKjQVksUOEJQ2hoyAkEYqhelukY7mQy5gDnTFCCaTqZCqQGilLRCsV/S1pn5Ic7j/qm+jbVEiBxiMuEGQoRMSFap6Ng9fHSgs/tvGE7/KvDXJr3vXlk7OfViQz7xEb814MYLp/xfLHPlQRKffJcD5LkUKhC1Qaa+aqaIUIFaDLIXSuyJy873cfYlTntLJKcuH3NEiwJYYeB+iLZbPWZy2tNff8AFdtrXwjL/QhLateiddPeoq32/wDDHxUTTt62yskCSOGWE8AgWlndzqQQ5poazffrIbvCmVSE30m25BHAueMsBPI+1Cd0eYkISmJbshOc8ePIYLL+tv48/EiOlJrpEz2qASO06R4gnjjN1OKCwEQxezoCKDCU+IbMA6y9o1j0EQbgeWkYyawEHiJ8JGnsKMerTaOLnE0AEgPaZGqvyiPGsKDan4A/RPWBjrxK2WdGw4c9nDPPjNSAwEkyEsh7Pel5HMdC9GQTQmgyXs+q75Mi/wBp4MaPksGzmbCQDSeACSidYI9nc9kOA6IC8umDnwIz/ZZ2XLhV1H0Fz1QuXgW9bLYR/wCziIcTrbazuWYuPGRIkcjeAUfjyHlHvnPQ3RF83jdabbOtnI9vtzXWdO293+w97gPmj8WReUfQHPXL68COmLcf9kz++h/01bv+G32u8Efip+Ue/c9cvL58/pe3U2We/wDdBi9N24Uut9/7o/FR5vo81VxXzSJ05b/RHv8A3VR0zbzg1tNf3T/DS8/4+lkobl86Z01biCSAJZCZr/Mqw+mOkCSLo+5a6j3o/DR5z9PS9dpfwkT8UP8APL5r5/DK2o8a1x2OhxGsGBNZbpmPEIVl6EcDtEUrIVmFthPGaqL7rPdCnwVOw4r1UHolmM5jDD4j4JW0WQNMjzmK+7NVMhcWHZrP8K5/YW7YoDCZOkDwrKR98gPalYzBxkKezD6otphgBkjMOBplIzFToQlfYnp7DoroExqE3pYOvNmTI4U2jQi7PJG6S6oXhcabxbUCcnCeU6ETXkrDEiMM4b3NcB5plPmOPI6L1/Q3XAvLWWqHMUlEbjQGU2ipxNZrGyxfLzn/AKLj+i7/ALf/AOlF7z+kbL/z0X+89RV55J08P0wS8w2gUlMag0B9y2uh7M5kN73AbI2RSriJNHtJHvVIFkvxtrBrWg1pPE8NVuRbPduNOEzFd+GHK5PLaLD/AClLfTRg2jo4Q3kYlrQATUmQH7rtnYCL+VAOJP381e2Ri4ucak/YCpDgtmwChDdojlWvFSZC2nzZCtTyxPyV4cK42p2nGksak/su2UBz3vO6NlvsNcdU5DslLxlw4zxpSWSrfRf10vuwzjh8pIVjhMvTNMjLl9FLSZtocMfqrWcT4Y/RE4KtqzwGiRoZz98qJWzWYNiGgxJz4zWjZIey2iThCcUzPuEhXn91UnGX1js03Qw0YO9lLs/grdmASAAZnDGoPww+KetgBx4ak6/fJBs8O9PhIz5SkayGKNmQEEtaaGrjiQaCeH0SrmcMK6J8wwwSmKunWc5Fxz+6pKO8TxyzVEjbFeArXwlhhzSnSULZB4g1PukeHGa0rPaAJmpkDw5S+KV6SBJIAyOhpl7Jol9iz0ViQxdZMChkSNfspyz3Be2QQRUAT+8UvBLXMALtueHEiVME9YqPHCfPnPwTpM8Nu3jwIlhy+pQoJaXlxkZ/5Zj4ha1ph4jGY+k0tBsO1da4E70iJHDhTiCR7Jo2NOuhtDyMxjwwww0WcaOpy5z9i049pbORGB2pCXHj7a6YJG0ACJeBN0lEBvo6bhdnWuI4ify8FXpCDsgyFPdI1lRchOLXhwBF6taVH38E5a3VORFPajs3lozJeZMDjLX4qrImxdMqTIpw4+HwWh0o0Fs6zwph9/RZjjUEYylI0mJVBWkZ0exmXEfQ5jQiaeA4iQnWR+/uaRszZmQAFPbn8k5ZXGuhwy+/klkcMzd6TVFyeg9yilT0vRe+/wDE5alo34v9jD/PFUUWf7VXn7Vg38Q8QrDB/wCH5FdUQbPsO6zl8l6SF5Nvt/KVFE7yXTEibp9qYs+I5jwUUTia9NYPJt5fJIt8s7n9VFFFOELZx5nxKBD3X8z4BRRCiFo8zn82pW04+35KKLSJpqx/fxXekN4/gb+YqKKewUsnkz7PyhX4j+XxKiirsCxt/wBqLZvLn+y/QV1RImTbPKxubvzBCG43l81FFRHzuM5/pKvb/N5D5KKJKKHdHN3gFineHt8QoorxRkPZPN5/RMwfLv5fpKiidKDqKKKFv//Z"
                alt="Life 2"
              />
            </div>
            <div className="lifestyle-img">
              <img
                src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop"
                alt="Life 3"
              />
            </div>
            <div className="lifestyle-img">
              <img
                src="https://images.unsplash.com/photo-1590739225287-bd31519780c3?q=80&w=1910&auto=format&fit=crop"
                alt="Life 4"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
