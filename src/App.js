import React, {useState} from 'react';
import axios from "axios";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [movies, setMovies] = useState([])
    const getMovies = async ()=> {
        try{
            const options = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nEypJq66ar-tr-KtFz-AC910YhdLakTDSM-oeIDLwQ'
                }
            };
            const address = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
            const result = await axios.get(address, options)
            console.log("++++", result.data)
            setMovies(result.data.results)
            // 가져와야 할 값을 console창에서 보고 data 뒤에 입력하기.
        }catch(err){
            console.log("err", err.message)
        }
    }


    return (
        <Container>
            <Row>
            {movies && movies.map((movie,index) => (
                <Col className={"mt-5"} key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                        {/*이미지 주소 + 각각 개별 이미지 링크 더해서 연결하기*/}
                        <Card.Body>
                            <Card.Title>{movie?.title}</Card.Title>
                            <Card.Text>
                                {movie.vote_average}
                                {movie.overview}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                // <div>
                //     <h1>{movie.title}</h1>
                //     <h2>{movie.vote_average}</h2>
                //     <h2>{movie.vote_count}</h2>
                // </div>
            ))}
            </Row>
            {/*onClick에 getMoives 입력하기 */}
            <button onClick={getMovies}>데이터 가져오기</button>

        </Container>
    );
};

export default App;