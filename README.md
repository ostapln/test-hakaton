<p align="center"><img src="assets/logo_team.png" alt=""></p>

 [Hackaton test]() посилання на сайт(на даний момент відсутнє посилання).

 [Swagger](http://198.46.226.156/api/v1/swagger/) посилання на документацію API.


**Всім привіт, ми команда __INFERNO TEAM__ ! Ось наш вваріант тестовго завдання на хакатон**:

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Пошук по файлу</summary>
  <ol>
    <li>
      <a href="#опис">загальна інформація</a>
    </li>
    <li>
      <a href="#міні-гайд-до-запуску-проєкту">запуск проекту</a>
    </li>
    <li>
      <a href="#стек-технологій">стек технологій</a>
    </li>
  </ol>
</details>
<br>

# Опис

>Сторінка 
**Реєстрація**
+ Поточне ім'я
+ Email
+ Пароль
+ Повторити паролю
   * Кнопка зареєструватися
<p align="center"><img src="assets/SignUp.png" alt=""></p>

```python

class UserRegistrationView(APIView):
    def post(self, request):
        data = {
            "username": request.data.get("username"),
            "email": request.data.get("email"),
            "password1": request.data.get("password_1"),
            "password2": request.data.get("password_2"),
            "type": request.data.get("type"),
        }

        serializer = UserAuthSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()

            return Response(
                data={
                    "user_id": str(user.id),
                    "tokens": create_jwt_pair_for_user(user=user),
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            data={"message": serializer.errors, "status": status.HTTP_400_BAD_REQUEST},
            status=status.HTTP_400_BAD_REQUEST,
        )

```

```python

class UserAuthSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(max_length=128, write_only=True, required=True)
    password2 = serializers.CharField(max_length=128, write_only=True, required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2", "type"]

    def validate_email(self, value):
        if UserRepository.user_exists_by_email(value):
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_username(self, value):
        if UserRepository.user_exists_by_username(value):
            raise serializers.ValidationError("This username is already in use.")
        return value

    def validate_type(self, value):
        if value not in ["assistants", "recipients"]:
            raise serializers.ValidationError("Type must be assistants or recipients.")
        return value

    def validate(self, data):
        if data["password1"] != data["password2"]:
            raise serializers.ValidationError(
                {"password2": "Password fields didn't match."}
            )

        data["password"] = data["password1"]
        return data

    def create(self, validated_data):
        validated_data.pop("password1", None)
        validated_data.pop("password2", None)

        return UserRepository.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            type=validated_data["type"],
        )

```
----

>Сторінка 
 **Вхід**
+ Email
+ Пароль
+ Кнопка **Увійти**
<p align="center"><img src="assets/Login.png" alt=""></p>

---

>**Головна сторінка сайту**
+ Дві кнопки:
+ "Мені потрібна допомога"
+ "Я хочу допомогти"
+ Посилання на сторінку реєстрації або входу

<p align="center"><img src="assets/home_page.png" alt=""></p>

---

> **Обліковий запис користувача,який надає допомогу**

+ кнопка "Налаштування профілю"
+ Допомоги
<p align="center"><img src="assets/personal_cabinet_who_help_settings.png" alt=""></p>

----

>**Сторінка пошуку та вибору запитів на допомогу**
+ Аналогія до оголошень, де користувач може:
+ Скролити
+ Вибирати запити, які хоче підтримати
<p align="center"><img src="assets/created_need.png" alt=""></p>

<p align="center"><img src="assets/needs_help.png" alt=""></p>

<p align="center"><img src="![alt text](assets/hover_card.png)" alt=""></p>

----
>**Сторінка потреби**
+ Опис потреби
+ Фото
+ Лінія показу скільки зібрано та скільки потрібно зібрати
+ Інформація про тих, хто вже підтримав
<p align="center"><img src="assets/needs_help_details.png" alt=""></p>

<p align="center"><img src="assets/changing_needs.png" alt=""></p>

----
# Міні-гайд до запуску проєкту 

Проект складається з двох основних частин: фронтенду, реалізованого на React, та бекенду, що базується на Django REST Framework (DRF). Для запуску проекту необхідно виконати ряд дій у відповідних директоріях.

frontend:
- перейдіть до папки frontend
- підніміть контейнер:
    ``` bash
    docker-compose up --build
    ```
проєкт буде доступний на порті 3000.

backend:
- перейдіть до папки backend
- підніміть контейнер:
    ``` bash
    docker-compose up --build
    ```
- створіть та заповніть файл .env 
```
SECRET_KEY= Your secret Django key

ADMIN_PATH=admin panel url path

ALLOWED_HOSTS=localhost,127.0.0.1(examples)

DEBUG= True/False

POSTGRES_DB= Your Postgres db name
POSTGRES_USER= Your Postgres db owners name
POSTGRES_PASSWORD= Your Postgres db owners password
POSTGRES_HOST= Your Postgres db host (127.0.0.1 for localhost)
POSTGRES_PORT=Your Postgres db port (5432 default)
```

проєкт буде доступний на localhost(80 port).

---


## Дописувачі

___Дуже дякую!___

<a href="https://github.com/ostapln/test-hakaton/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ostapln/test-hakaton" width="30%"/>
  </a>



# Стек технологій

**FRONTEND**



[![HTML](https://img.shields.io/badge/-HTML-E342?logo=html5&style=flat)](https://developer.mozilla.org/en-US/docs/Web/HTML)[![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS)[![JavaScript](https://img.shields.io/badge/-JavaScript-F7aF1E?logo=javascript&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)[![TypeScript](https://img.shields.io/badge/-TypeScript-01CC?logo=typescript&style=flat)](https://www.typescriptlang.org/)[![React](https://img.shields.io/badge/-React-41a?logo=react&style=flat)](https://reactjs.org/)[![Axios](https://img.shields.io/badge/-Axios-1175B2?logo=axios&style=flat)](https://axios-http.com/)



---
**BACKEND**

[![Python](https://img.shields.io/badge/-Python-376AB?logo=python&style=flat-square)](https://www.python.org/)[![Django](https://img.shields.io/badge/-Django-092E20?logo=django&style=flat-square)](https://www.djangoproject.com/)[![Django REST Framework](https://img.shields.io/badge/-Django_REST_Framework-FF1709?logo=django&style=flat-square)](https://www.django-rest-framework.org/)[![Redis](https://img.shields.io/badge/-Redis-CC000?logo=redis&style=flat-square)](https://redis.io/)[![Docker](https://img.shields.io/badge/-Docker-249?logo=docker&style=flat-square)](https://www.docker.com/)[![Nginx](https://img.shields.io/badge/-Nginx-269539?logo=nginx&style=flat-square)](https://www.nginx.com/)[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-332122?logo=postgresql&style=flat-square)](https://www.postgresql.org/)







