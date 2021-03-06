package com.smileBlog.article.servlet;

import com.smileBlog.article.dao.ArticleDAO;
import com.smileBlog.article.entity.Article;
import com.smileBlog.user.entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Date;

/**
 * Created by asus on 2017/6/3.
 */
//@WebServlet(name = "SubmitArticleServlet")
public class SubmitArticleServlet extends HttpServlet
{
	ArticleDAO articleDAO = new ArticleDAO();

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException
	{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();

		User user = (User) (request.getSession().getAttribute("user"));
		if(user.getStatus() == 1)
		{
			out.write("<script language='javascript'>alert('you have been limit!');window.location.href='"+request.getContextPath()+"/index';</script>");
		}

		Article article = new Article();
		article.setTitle(request.getParameter("title"));
		article.setContent(request.getParameter("content"));
		article.setContentTxt(request.getParameter("contentTxt"));
//		System.out.println(request.getCharacterEncoding());
		System.out.println(request.getParameter("contentTxt"));
		article.setOwnuid(user.getUid());

		try
		{
			if(articleDAO.add(article) == 1)
			{
				out.write("<script language='javascript'>alert('publish success!');window.location.href='"+request.getContextPath()+"/index';</script>");
			}
			else
			{
				out.write("<script language='javascript'>alert('publish fail!');window.location.href='"+request.getContextPath()+"/index';</script>");
			}

//			request.getRequestDispatcher("/UpdateUserArticleNumberServlet").forward(request, response);

//			out.write("<script language='javascript'>alert('publish success!');window.location.href='"+request.getContextPath()+"/index';</script>");
//			response.sendRedirect(request.getContextPath() + "/index");
		}
		catch (SQLException e)
		{
			out.write("<script language='javascript'>alert('publish fail!');window.location.href='"+request.getContextPath()+"/index';</script>");
			e.printStackTrace();
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{

	}
}
