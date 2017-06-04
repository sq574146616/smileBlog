package com.smileBlog.user.servlet;

import com.smileBlog.user.dao.UserDAO;
import com.smileBlog.user.entity.Article;
import com.smileBlog.user.entity.User;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by asus on 2017/6/3.
 */
//@WebServlet(name = "AjaxGetArticleListServlet")
public class AjaxGetArticleListServlet extends HttpServlet
{
	UserDAO userDAO = new UserDAO();

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException
	{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();

		String uidString = request.getParameter("uid");
		System.out.println(uidString);
		int uid;

		if(!uidString.equalsIgnoreCase("null") && uidString.length() > 0)
		{
			uid = Integer.parseInt(uidString);
		}
		else
		{
			User user = (User) request.getSession().getAttribute("user");
			uid = user.getUid();
		}

		System.out.println(uid);
		try
		{
			List<Article> articleList = userDAO.selectArticleByUid(uid);

			JSONArray json =JSONArray.fromObject(articleList);

			System.out.println(json.toString());
			out.print(json);
		}
		catch (SQLException e)
		{
			e.printStackTrace();
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{

	}
}
