--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    link text NOT NULL,
    "shortlyLink" text NOT NULL,
    amount integer DEFAULT 0 NOT NULL,
    "createAt" date DEFAULT now()
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "creatAt" date DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "creatAt" date DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (2, 5, 'https://...', 'WMyzm40M', 0, '2022-12-20');
INSERT INTO public.links VALUES (3, 5, 'https://primeirodetodos', 'HwQLmQLd', 0, '2022-12-20');
INSERT INTO public.links VALUES (6, 5, 'https://primeirodetodos', 'TvRY2uJ1', 0, '2022-12-20');
INSERT INTO public.links VALUES (7, 5, 'https://primeirodetodoss', 'VgMsvQg5', 0, '2022-12-20');
INSERT INTO public.links VALUES (8, 5, 'https://2', 'TxhgJrsb', 0, '2022-12-20');
INSERT INTO public.links VALUES (9, 5, 'https://3', '-bfGHboR', 0, '2022-12-20');
INSERT INTO public.links VALUES (18, 1, 'https://5', 'uvonrxTm', 0, '2022-12-21');
INSERT INTO public.links VALUES (19, 1, 'https://5', 'vaaR8ae6', 0, '2022-12-21');
INSERT INTO public.links VALUES (20, 1, 'https://5', 'TSm8UuA3', 0, '2022-12-21');
INSERT INTO public.links VALUES (5, 5, 'https://primeirodetodos', 'rd61n43k', 2, '2022-12-20');
INSERT INTO public.links VALUES (24, 1, 'https://5', 'QHZSJbMT', 0, '2022-12-21');
INSERT INTO public.links VALUES (25, 1, 'https://5', '66AXF41d', 0, '2022-12-21');
INSERT INTO public.links VALUES (26, 1, 'https://5', 'F9spaZaz', 0, '2022-12-21');
INSERT INTO public.links VALUES (28, 13, 'https://MEUlINK 2', 'tqPIF7WD', 0, '2022-12-21');
INSERT INTO public.links VALUES (30, 13, 'https://MEUlINK44444', 'RrBCJo4x', 0, '2022-12-21');
INSERT INTO public.links VALUES (31, 13, 'https://MEUlINK44444', 'CJCXrDF0', 0, '2022-12-21');
INSERT INTO public.links VALUES (32, 13, 'https://MEUlINK44444', 'G4ZaXQPH', 0, '2022-12-21');
INSERT INTO public.links VALUES (1, 5, 'https://...', 'jNIjxslM', 4, '2022-12-20');
INSERT INTO public.links VALUES (34, 13, 'https://www.google.com/', '_7uILY3d', 0, '2022-12-21');
INSERT INTO public.links VALUES (35, 13, 'https://www.google.com/', 'Cs_99oG6', 0, '2022-12-21');
INSERT INTO public.links VALUES (33, 13, 'https://www.google.com/', 'emA4VNHe', 5, '2022-12-21');
INSERT INTO public.links VALUES (36, 13, 'https://www.google.com/', 'pZCMFwb7', 0, '2022-12-21');
INSERT INTO public.links VALUES (37, 13, 'h://www.google.com/', 'cU13LN4w', 0, '2022-12-21');
INSERT INTO public.links VALUES (38, 13, 'h:/.google.com/', 'Fs-1m9j3', 0, '2022-12-21');
INSERT INTO public.links VALUES (39, 13, 'h:/.', 'xaPZKwAk', 0, '2022-12-21');
INSERT INTO public.links VALUES (40, 13, 'https://www.google.com/', 'b0a0JPls', 0, '2022-12-21');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 4, 'cf631abb-e786-42d4-8157-a0af5e61ac6a', '2022-12-20');
INSERT INTO public.sessions VALUES (2, 4, 'e5eb13ba-0963-4b88-917c-6641a4237d91', '2022-12-20');
INSERT INTO public.sessions VALUES (3, 4, '4b14994f-c080-4501-974d-daf38a5d459e', '2022-12-20');
INSERT INTO public.sessions VALUES (4, 4, '7be63cac-98ba-463d-a52c-81cd78c85f06', '2022-12-20');
INSERT INTO public.sessions VALUES (5, 4, '876a6009-3485-4b50-ab1e-13f16c1b751f', '2022-12-20');
INSERT INTO public.sessions VALUES (6, 5, 'fde3e357-7358-4921-a4de-f8ed5de76638', '2022-12-20');
INSERT INTO public.sessions VALUES (7, 5, 'f73732f0-40ef-4c8c-a161-af2f9a57c321', '2022-12-20');
INSERT INTO public.sessions VALUES (8, 1, '06a28734-d03b-45af-81c0-bd7882063b37', '2022-12-21');
INSERT INTO public.sessions VALUES (9, 1, '89a137cc-54e9-4aed-955d-9683d20a38bf', '2022-12-21');
INSERT INTO public.sessions VALUES (10, 1, '4ae78d06-1aa2-4819-add0-9636f7dcf855', '2022-12-21');
INSERT INTO public.sessions VALUES (11, 1, '8e187e0d-ab6f-441f-9d32-16f0375927e4', '2022-12-21');
INSERT INTO public.sessions VALUES (12, 1, 'c63855a5-c8a9-45be-9335-c6be65619b03', '2022-12-21');
INSERT INTO public.sessions VALUES (13, 1, 'b162bff6-c18d-4201-92d2-1d79b5ea406e', '2022-12-21');
INSERT INTO public.sessions VALUES (14, 1, '3ef25307-1430-4885-bd2c-2b52de17c52f', '2022-12-21');
INSERT INTO public.sessions VALUES (15, 1, '87719b42-f091-4483-b51c-2c8c6fccf8b2', '2022-12-21');
INSERT INTO public.sessions VALUES (16, 1, '8e6e3a05-e89b-47cb-802e-2b0067ac4738', '2022-12-21');
INSERT INTO public.sessions VALUES (17, 1, 'bac11d1d-203f-4c29-be8d-10d17ef5b49b', '2022-12-21');
INSERT INTO public.sessions VALUES (18, 13, 'f3bfc073-b5a1-4bd3-9f07-bc2ec395b461', '2022-12-21');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'luiz', 'luiz@driven.com.br', '$2b$10$AQMAhObnMB3s9lYn.WIT9.zZ3EB313fOSFd.61/y5fIUiRe0oFShW', '2022-12-20');
INSERT INTO public.users VALUES (2, 'luiz', 'luiz2@driven.com.br', '$2b$10$IvoIYGmPL55qtiGwAsVUUOFOa.KB4kysdGrQVI0uaL0W4WEZZ9xRi', '2022-12-20');
INSERT INTO public.users VALUES (3, 'luiz', 'luiz23@driven.com.br', '$2b$10$gwf1A2K0rsTUmkAg2RYy4exTIGPgXaLqBvsF3KQNS3tgFvt/fxigW', '2022-12-20');
INSERT INTO public.users VALUES (4, 'luiz', 'a@a.com.br', '$2b$10$et9IsoKBeaIyfRaegLaK8e.qEBj/GlSSVHKrLKZP8i9hpMDYw7sPK', '2022-12-20');
INSERT INTO public.users VALUES (5, 'q', 'q@q.com.br', '$2b$10$YHGFDObIiFhl8WI5Cp/Ge.mPPlzEirgj7rAiWzJW6xj4j.3LRovzK', '2022-12-20');
INSERT INTO public.users VALUES (6, 'q', 'q@q.com.br', '$2b$10$iS7m7SRm5qNK3k1FYEoUk.W30SO/tZISu.1o5qJWkeCHU8zQF410C', '2022-12-21');
INSERT INTO public.users VALUES (7, 'q', 'q@q.com.br', '$2b$10$38Qz32On0V8iLR8z.VtDtelxbRvOY8uq3XZLAvVE9qwRfMu.sR5nG', '2022-12-21');
INSERT INTO public.users VALUES (8, 'q', 'q@q.com.br', '$2b$10$j2fGZF/VpQwFeGHi5VO1LOLAHCM29Q.uimB.iYnVwjojQKmk.L.je', '2022-12-21');
INSERT INTO public.users VALUES (9, 'qqq', 'q@q3.com.br', '$2b$10$8GD.NlUST3L/cTKWxdXoOuuTosnBBr.J86VWF.R4NnMf0GpnnUp4W', '2022-12-21');
INSERT INTO public.users VALUES (10, 'qqq', 'q3@q3.com.br', '$2b$10$9t/XFXHbTUvZ8389GMF5Fe.oF6PGHKunpk1DKwP632LB/I01q6ze.', '2022-12-21');
INSERT INTO public.users VALUES (11, 'qqq', 'q3@qs3.com.br', '$2b$10$lMvj13UW4N2vl6fjmelXUe8BNnka9AnrTyHwTTBD.x2rJDrkeNTtC', '2022-12-21');
INSERT INTO public.users VALUES (12, 'qqq', 'q4@q4.com.br', '$2b$10$l46FDBmDRZlYxazBQWW03usoF1VZLHzcRS78q/S8TNsqwjf2KYIrO', '2022-12-21');
INSERT INTO public.users VALUES (13, 'Luiz', 'Luiz@driven.com.br', '$2b$10$gSxQzc/sfvOA9/hhnnx5seOyQl.p2Ln0.FezP/bsEb.GVfSJKcWlu', '2022-12-21');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 40, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 18, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

