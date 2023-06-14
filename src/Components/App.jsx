import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Heading from "./Heading";
import Caraousel from "./Caraousel";
import Textarea from "./Textarea";
function App(){
    return(
        <div>
            <Navbar/>
            <Heading class="neeraj" title="Welcome To JMD FoodHub -- A place Where You Will Enjoy Food 💖"/>
            <Textarea/>
            <Heading class="world" title="Food You Must Love 💝"/>
            <Card description=" A traditional    flatbread   from the Indian subcontinent. " class="card" title ="Special Touch"imgSource="https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg" name="JMD Special Combo" price="₹220"productID="#142345"/>
            <Card description="High quality beef medium to well with cheese on a multigrain bun."class="card" title ="Burger"imgSource="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" name="Veg Leveled Up Burger" price="₹110"productID="#987656"/>
            <Card description="Dried noodles fused with oil in an an excellent manner." class="card" title ="Maggie"imgSource="https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/pass/new%20restaurant%20menus%20in%20Mumbai.jpg" name="Round Curly Maggie" price="₹90"productID="#876012"/>
            <Card description="A Rumali Roti is a thin, soft flatbread that can be folded like a handkerchief." class="card" title ="Roti"imgSource="https://img.indiafilings.com/learn/wp-content/uploads/2019/05/12004424/FSSAI-Registration-for-Restaurants.jpg" name="Rumali Roti " price="₹45"productID="#129871"/>
            <Card description="A flat dough bread, fried or deep-fried in oil, shortening, or lard. It is traditional food of Nepal."class="card" title ="Fried Bread"imgSource="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" name="Sliced Up Bread" price="₹90"productID="#129987"/>
            <Card description=" Consists of a variety of regional and traditional cuisines native to India. " class="card" title ="Apna Khana"imgSource="https://www.rewardsnetwork.com/wp-content/uploads/2016/12/IndianFood_Main.jpg" name="Indian Thali" price="₹220"productID="#766677"/>
            <Heading class="world2" title="Quench Your Thirst With Our Drinks 🍹"/>

            <Card description=" A creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder." class="card" title ="Coffee"imgSource="https://media-cdn.tripadvisor.com/media/photo-p/0d/32/07/5c/cold-coffee.jpg" name="Cold Coffee" price="₹110"productID="#444878"/>
            <Card description=" Made with Oreo cookies, milk, vanilla ice cream, sugar, and chocolate sauce, this thick oreo shake recipe will take over your taste buds."class="card" title ="Shake"imgSource="https://b.zmtcdn.com/data/reviews_photos/d0a/f17b118acad66678fc7d3088edcf5d0a_1613891250.jpg" name="Oreo Shake" price="₹150"productID="#898980"/>
            <Card description=" Sweet beverage made by blending milk, ice cream, and flavorings such as butterscotch, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture." class="card" title ="Special Icon"imgSource="https://www.whiskaffair.com/wp-content/uploads/2021/04/Chocolate-Cold-Coffee-2-1.jpg" name="JMD Special Drink" price="₹220"productID="#112233"/>
            <Card description="Lassi, a creamy, frothy yogurt-based drink, blended with water and various fruits or seasonings (such as salt or sugar)." class="card" title ="Lassii"imgSource="https://static.toiimg.com/thumb/msid-49273940,width=1200,height=900/49273940.jpg"name="Masala Lassi" price="₹130"productID="#999877"/>
            <Card description="Made With yogurt or curd, milk ,sweet mango slices  as well as a hint of cinnamon and optionally, ground cardamom powder."class="card" title ="Aam Lassii"imgSource="https://www.teaforturmeric.com/wp-content/uploads/2021/07/The-Best-Mango-Lassi-Restaurant-Style-6-728x1092.jpg" name="Mango Lassi" price="₹150"productID="#090988"/>
            <Card description="Fruit Lassi Made With blending curd or yogurt with water or milk, salt or sugar and a few spices or herbs." class="card" title ="Fruit Drink"imgSource="https://lh3.ggpht.com/De7WNg2k7gGkcJTbeQpmCPX9LFbVPqUMmeb5-i49UCzfHVsULXyRzBwlvDQwfKcGxcPBESgU0MDW57CO5FBzIT4=s335-c" name="Mixed Fruit Lassi" price="₹180"productID="#101019"/>
            <Heading class="karan" title="A Quick Look Up On Our JMD FoodHub👀"/>
            <Caraousel/>
            <div>
               <center> <h1 style={{color:"red"}}>Location📍</h1></center>
              <center> <strong><em><p style={{color:"navy",fontSize:"20px"}}>12 E-6 , Opposite to INOX city palace , New Delhi.</p></em></strong></center> 
              <center><b><h2 style={{color:"brown"}}>We Are Open 24*7 To Serve You The Best Out Of Your Ever Experience!!</h2></b></center>
             <center> <h3 style={{color:"#A6D0DD"}}><strong>Contact Us : 7878xxxxxx</strong></h3></center>
            </div>
            <Footer/>
        </div>
    )
}
export default App;
