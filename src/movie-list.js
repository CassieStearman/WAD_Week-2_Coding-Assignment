import React from "react";
import Navbar from "./navbar";
import ReviewForm from "./review-form";
import Review from "./review";

export default class MovieList extends React.Component {
    render() {
        return (            
            <div className="container">
                <Navbar />
                <div className="card-deck" >

                    <div className="card bg-dark text-white">
                        <img className="card-img-side" width="250px" height="400px" src="https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Movie Poster" />
                        <div className="card-body">
                            <h5 className="card-title">The Proposal</h5>
                            <p className="card-text">Faced with deportation to her native Canada, high-powered book editor Margaret Tate (Sandra Bullock) says she's engaged to marry Andrew Paxton (Ryan Reynolds), her hapless assistant. Andrew agrees to the charade, but imposes a few conditions of his own, including flying to Alaska to meet his eccentric family. With a suspicious immigration official always lurking nearby, Margaret and Andrew must stick to their wedding plan despite numerous mishaps.</p>
                        </div>
                        <div className="card-footer">
                            <ReviewForm />
                            <Review />
                        </div>
                    </div>

                    <div className="card bg-dark text-white">
                        <img className="card-img-side" width="300px" height="400px" src="https://www.quirkybyte.com/wp-content/uploads/2021/11/1067491-v-f0a658ea0b22.jpeg" alt="Movie Poster" />
                        <div className="card-body">
                            <h5 className="card-title">Free Guy</h5>
                            <p className="card-text">A bank teller (Ryan Reynolds) discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story. Now, in a world where there are no limits, he is determined to be the guy who saves his world his way before it’s too late.</p>
                        </div>
                        <div className="card-footer">
                            <ReviewForm />
                            <Review />
                        </div>
                    </div>

                    <div className="card bg-dark text-white">
                        <img className="card-img-side" width="250px" height="400px" src="https://m.media-amazon.com/images/I/71Wc9juSMGL._AC_SX466_.jpg" alt="Movie Poster" />
                        <div className="card-body">
                            <h5 className="card-title">Deadpool</h5>
                            <p className="card-text">Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life.</p>
                        </div>
                        <div className="card-footer">
                            <ReviewForm />
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}