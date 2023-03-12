# SSM - 02 - 获取bean的方式

### 1. 通过id获取bean

```java
//通过id获取bean
@Test
public void testIoC1(){
    Object person = applicationContext.getBean("person");
    System.out.println(person);
}
```

### 2. 通过类型获取bean

```java
//通过类型获取bean
@Test
public void testIoC2(){
    Person person = applicationContext.getBean(Person.class);
    person.say();
}
```

> 通过类型获取bean，在xml文件中**只能配置一个该类型的bean**，否则会报错


```java
No qualifying bean of type 'top.alanlee.study.spring.ioc.bean.Person' available: expected single matching bean but found 2: person,person1
```
