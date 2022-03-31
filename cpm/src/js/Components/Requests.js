import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Global/Container";

const Requests = () => {
  const [usersList, setUsersList] = useState([]);
  const [maxPages, setMaxPages] = useState();
  const [index, setIndex] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
      )
      .then((res) => {
        setMaxPages(res.data.total_pages);
        setUsersList(res.data.users);
      });
  },[]);

  useEffect(() => {
    if (index < maxPages) {
      if (index === 1) {
        return;
      }
      axios
        .get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${index}&count=6`
        )
        .then((res) => {
          let newArray = []
          newArray.push(res.data.users)
          newArray.push(usersList)
          setUsersList(newArray);
        });
    }
  }, [index]);

  return (
    <section className="request-page">
      <Container>
        <h1>Working With GET Request</h1>
        <div className="users-wrap">
          {usersList.map((item) => (
            <div className="user">
              <img src={item.photo} />
              <p>{item.position}</p>
              <div className="user-info">
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="show_more">
          <button
            onClick={() => {
              setIndex((index) => index + 1);
            }}
          >
            Show More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Requests;
