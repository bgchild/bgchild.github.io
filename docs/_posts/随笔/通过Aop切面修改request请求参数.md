---
title: 通过Aop切面修改request请参数
date: 2020-09-11 20:36:35
categories: 
  - Java
tags: 
  - Java
permalink: /pages/f97540/
sidebar: auto
author: 
  name: AnWen
  link: https://github.com/micolor
---

## 自定义注解ParamsAopAnnotation

```
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
public @interface ParamsAopAnnotation {
    String value() default "";
}
```



## 创建ParamsAspect切面

```
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class ParamsAspect {
    /**
     * 在方法执行之前、后执行该方法
     * 设置需要执行该方法的类路径和注解
     */
    @Around("execution(* com.lk.controller.*.*(..)) && (@annotation(com.lk.interceptor.ParamsAopAnnotation))")
    public Object interceptor(ProceedingJoinPoint point) throws Throwable {
        // 获取请求参数
        Object[] args = point.getArgs();
        for (int i = 0; i < args.length; i++) {
            Object arg = args[i];
            if (arg instanceof HttpServletRequest) {
                HttpServletRequest request = (HttpServletRequest) arg;
                ChangeRequestWrapper requestWrapper = new ChangeRequestWrapper(request);
                requestWrapper.setParameter("a", "0");
                args[i] = requestWrapper;
            }
        }
        return point.proceed(args);
    }
}
```



## 使用HttpServletRequestWrapper修改参数

```
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.util.HashMap;
import java.util.Map;

/**
 * @author laok
 */
public class ChangeRequestWrapper extends HttpServletRequestWrapper {
    /**
     * 用于存储请求参数
     */
    private Map<String, String[]> params = new HashMap<>();

    /**
     * 构造方法
     *
     * @param request
     */
    public ChangeRequestWrapper(HttpServletRequest request) {
        super(request);
        // 把请求参数添加到我们自己的map当中
        this.params.putAll(request.getParameterMap());
    }

    /**
     * 添加参数到map中
     *
     * @param extraParams
     */
    public void setParameterMap(Map<String, Object> extraParams) {
        for (Map.Entry<String, Object> entry : extraParams.entrySet()) {
            setParameter(entry.getKey(), entry.getValue());
        }
    }

    /**
     * 添加参数到map中
     *
     * @param name
     * @param value
     */
    public void setParameter(String name, Object value) {
        if (value != null) {
            System.out.println(value);
            if (value instanceof String[]) {
                params.put(name, (String[]) value);
            } else if (value instanceof String) {
                params.put(name, new String[]{(String) value});
            } else {
                params.put(name, new String[]{String.valueOf(value)});
            }
        }
    }

    /**
     * 重写getParameter，代表参数从当前类中的map获取
     *
     * @param name
     * @return
     */
    @Override
    public String getParameter(String name) {
        String[] values = params.get(name);
        if (values == null || values.length == 0) {
            return null;
        }
        return values[0];
    }

    /**
     * 重写getParameterValues方法，从当前类的 map中取值
     *
     * @param name
     * @return
     */
    @Override
    public String[] getParameterValues(String name) {
        return params.get(name);
    }
}
```



## Controller代码示例

```
import com.lk.interceptor.ParamsAopAnnotation;
import com.lk.pojo.User;
import com.lk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class HelloController {
   
    @ParamsAopAnnotation
    @RequestMapping("hello")
    public void hello(String a,HttpServletRequest request) {
        String id = request.getParameter("id");
        System.out.println(id);
    }
}
```

