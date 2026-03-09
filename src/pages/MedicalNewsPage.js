import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Section from "components/Section";
import { Container } from "react-bootstrap";
import NewsTile from "components/NewsTile";

const MedicalNewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch("/content/blog/index.json");
        const data = await res.json();

        setPosts(data);
      } catch (err) {
        console.error("Load posts error:", err);
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      <Header />

      <Section scheme="white" paddingVertical="pt-5">
        <Container>
          <div className="page-title">Cập nhật Y khoa</div>

          <div className="mt-4">
            {posts.map((slug) => (
              <NewsTile key={slug} slug={slug} landscape />
            ))}
          </div>

          <hr className="mt-5 footer-divider" />
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default MedicalNewsPage;