import React, { useEffect, useRef, useState } from "react";
import { grey2, grey3, purple } from "./colors";
import "./profile.css";
import { uploadImage } from "./utils";
import RingLoader from "react-spinners/RingLoader";

function Card(props) {
  return (
    <div className="profile-card" {...props}>
      {props && props.children}
    </div>
  );
}

function Button({ text, onClick, icon, style }) {
  return (
    <button className="profile-button" onClick={onClick} style={style}>
      {icon && (
        <span style={{ marginRight: icon ? 8 : 0 }} className="material-icons">
          {icon}
        </span>
      )}
      {text.toUpperCase()}
    </button>
  );
}

export function Dialog({ open, children, header, subheader, actions, size }) {
  return open ? (
    <div className="profile-modal">
      <div
        className="profile-modal-data"
        style={{
          margin: `10% ${
            size === "md" ? "20%" : size === "lg" ? "10%" : "30%"
          }`,
        }}
      >
        <div className="profile-modal-header">{header}</div>
        <div className="profile-modal-subheader">{subheader}</div>
        <div className="profile-modal-content">{children}</div>
        <div className="profile-modal-actions">{actions}</div>
      </div>
    </div>
  ) : null;
}

function IconButton({ onClick, icon, style, children, iconSize }) {
  return (
    <button
      className="profile-icon-button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        ...style,
      }}
    >
      <span className="material-icons" style={{ fontSize: iconSize }}>
        {icon}
      </span>
      {children}
    </button>
  );
}

function TextField({ label, value, onChange }) {
  return (
    <div class="input-container">
      <input type="text" value={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <div class="input-container">
      <textarea
        style={{ resize: "none" }}
        rows={4}
        type="text-area"
        onChange={onChange}
      >
        {value}
      </textarea>
      <label>{label}</label>
    </div>
  );
}

function SearchField({ search }) {
  const [value, setValue] = useState("");

  return (
    <div className="profile-search">
      <input
        type="search"
        placeholder="search..."
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        icon="search"
        iconSize={18}
        style={{
          borderRadius: "0 4px 4px 0",
          border: `1px solid ${value && value.length > 2 ? purple : grey2}`,
        }}
        onClick={() => value && value.length > 2 && search(value)}
      />
    </div>
  );
}

function ProfileAppear({ user }) {
  const [avatar, setAvatar] = useState(user.avatar);
  const [background, setBackground] = useState(user.background);
  const onClickAvatarRef = useRef();
  const onClickBackgroundRef = useRef();

  const uploadAvatar = (e) =>
    uploadImage(e?.target?.files?.["0"]).then((data) => setAvatar(data));
  const uploadBackground = (e) =>
    uploadImage(e?.target?.files?.["0"]).then((data) => setBackground(data));

  return (
    <section style={{ marginBottom: 32, position: "relative", paddingTop: 32 }}>
      <Card style={{ backgroundColor: grey3, boxShadow: "none" }}>
        <div
          id="profile-backgroud"
          alt="background profile avatar"
          style={{ backgroundImage: `url(${background || "default-bg.jpg"})` }}
        >
          <div id="profile-edit-profile-bg">
            <IconButton
              icon="edit"
              onClick={() => onClickBackgroundRef.current.click()}
            >
              <input
                ref={onClickBackgroundRef}
                onChange={uploadBackground}
                type="file"
                hidden
              />
            </IconButton>
          </div>
        </div>
      </Card>
      <Card
        id="profile-avatar"
        style={{ backgroundImage: `url(${avatar || "default-avatar.png"})` }}
      >
        <div id="profile-edit-profile-avatar">
          <IconButton
            icon="edit"
            onClick={() => onClickAvatarRef.current.click()}
          >
            <input
              ref={onClickAvatarRef}
              onChange={uploadAvatar}
              type="file"
              hidden
            />
          </IconButton>
        </div>
      </Card>
    </section>
  );
}

function ProfileSettings({ user }) {
  const [openSettings, setOpenSettings] = useState();
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.description);

  // TODO: fetch new user information
  const saveSetting = () => {
    setOpenSettings(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpenSettings(true)}
        text={"settings"}
        icon={"settings"}
        style={{ marginRight: "8px" }}
      />
      <Dialog
        size="md"
        header="Settings"
        open={openSettings}
        actions={
          <>
            <Button icon="done" text="save" onClick={() => saveSetting()} />
            <Button
              icon="close"
              text="close"
              style={{ marginLeft: 8 }}
              onClick={() => setOpenSettings(false)}
            />
          </>
        }
      >
        <div>
          <p style={{ paddingBottom: 12 }}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <TextArea
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
        </div>
      </Dialog>
    </>
  );
}

function SearchAnimes() {
  const [openSearchAnimes, setOpenSearchAnimes] = useState();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  /// TODO change to consume our API
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then((response) => response?.json())
      .then((data) => setAnimes(data?.top))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const searchAnimes = (value) => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v3/search/anime?q=${value}&page=1&limit=50`)
      .then((response) => response?.json())
      .then((data) => setAnimes(data?.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Button
        onClick={() => setOpenSearchAnimes(true)}
        text={"add to my list"}
        icon={"add"}
        style={{ marginRight: "8px" }}
      />
      <Dialog
        size="md"
        header="Animes"
        open={openSearchAnimes}
        actions={
          <Button
            icon="close"
            text="close"
            style={{ marginLeft: 8 }}
            onClick={() => setOpenSearchAnimes(false)}
          />
        }
        subheader={
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingBottom: 12,
            }}
          >
            <SearchField search={searchAnimes} />
          </div>
        }
      >
        {loading ? (
          <div
            style={{
              height: 60,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "32px 0",
            }}
          >
            <RingLoader color={grey2} />
          </div>
        ) : (
          <div>
            {animes ? (
              <ul className="profile-simple-list">
                {animes.map((a, index) => (
                  /// TODO go to detail anime page
                  <li key={index}>
                    <Button
                      style={{ width: "100%", margin: "4px 0" }}
                      text={a?.title}
                      onClick={() => {}}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <span>No animes found...</span>
            )}
          </div>
        )}
      </Dialog>
    </>
  );
}

function ProfileActions({ user }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div>
        <ProfileSettings user={user} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SearchAnimes />
        {/* TODO: GO TO SAMUEL PAGE */}
        <Button onClick={() => {}} text={"my anime list"} icon={"list"} />
      </div>
    </div>
  );
}

function ProfileFooter({ user }) {
  return (
    <section>
      <Card style={{ backgroundColor: grey3, boxShadow: "none" }}>
        <ProfileActions user={user} />
        <div>
          <h3 style={{ textAlign: "center" }}>{user?.name}</h3>
        </div>
        {user?.description && (
          <div>
            <Card style={{ backgroundColor: grey2 }}>{user?.description}</Card>
          </div>
        )}
      </Card>
    </section>
  );
}

export default function Profile() {
  const user = {
    id: "1e1e1e1e1e",
    name: "Excepteur do Cupidatat",
    description:
      "Commodo do laborum tempor nostrud cillum irure labore consectetur elit duis eiusmod eu. Proident Lorem laborum nisi non deserunt ipsum reprehenderit ut et velit cillum. Excepteur cupidatat esse irure tempor tempor enim elit magna minim. In dolor officia do nisi sint voluptate dolore. Incididunt magna consequat tempor sit occaecat aliqua pariatur in ex et fugiat ut officia tempor. Laboris sint est do et elit. Eu ullamco officia anim ullamco.",
    background: null,
    avatar: null,
  };

  return (
    <main id="profile-main">
      <ProfileAppear user={user} />
      <ProfileFooter user={user} />
    </main>
  );
}
